# Optimal Blue Marketplace API (v4) — Project Reference

This file is a practical reference for implementing correct Optimal Blue Marketplace API calls in this project.
It focuses on:

- Base URLs (consumer vs full)
- Authentication + required headers
- The “search → product details → amortization/fees” flow
- Key request/response fields we rely on (searchId, productId, rate, lockPeriod)

Sources (OpenAPI):

- Consumer / Best Execution Search Results v4
- Full / Complete Search Results v4

## 1) Products / Base URLs

### A) Consumer (Best Execution Search Results)

Use when you want streamlined “best execution” results (one best product per rate).
Servers:

- https://marketplace.optimalblue.com/consumer
- https://marketplace2.optimalblue.com/consumer

OpenAPI: Best Execution Search Results v4

### B) Full (Complete Search Results)

Use when you want richer workflows: QM testing, “all eligible products”, best price scenarios, extra endpoints like lender fees, product groups, etc.
Servers:

- https://marketplace.optimalblue.com/full
- https://marketplace2.optimalblue.com/full

OpenAPI: Complete Search Results v4

## 2) Authentication & Required Headers

### Auth (OAuth2 client_credentials)

The portal indicates OAuth2 with client_credentials flow (Marketplace Authentication Server).
You will obtain an access token and send:
Authorization: Bearer <access_token>

### Common required headers

- api-version: 4
- Cache-Control: no-cache (recommended per portal examples)

NOTE: Keep tokens server-side. Never expose client_secret in the frontend.

## 3) Common Path Parameters

Most endpoints require:

- businessChannelId (int)
- originatorId (int)

These are path params:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/...

## 4) “Search → Details” Flow (Most Common)

### Step 1: Run a search (returns searchId + a list of products)

You POST a scenario (borrower + property + loan) and get:

- searchId (string)
- products[] each containing productId (int) + rate/price/lockPeriod summary fields

Then…

### Step 2: Get product details using {searchId} and {productId}

You GET product details for a specific productId from step 1.

Then optionally…

### Step 3: Get amortization schedule for a selected quote

You POST rate + lockPeriod (and sometimes DTI) to get a full payment stream.

## 5) Consumer API (Best Execution)

### 5.1 Best Execution Search (Initiating call)

POST:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/bestexsearch

Purpose:

- Returns single best execution product at each rate (streamlined for consumer display).

Request body schema:

- borrowerInformation (required)
- propertyInformation (required)
- loanInformation (required)
- coBorrowerInformation (optional)

Important response fields:

- searchId (string)
- products[] with productId (int), rate, price, lockPeriod, etc.

Notes:

- Optional: exclude guidelines in response by appending:
  ?$deselect=Products/Guidelines

### 5.2 Best Execution Product Details

GET:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/bestexsearch/{searchId}/products/{productId}

Purpose:

- Once you have (searchId + productId), returns all price/rate/lockPeriod combos for that product
  - adjustments, ratio calcs, notes/advisories.

Key response shape:

- productName
- quotes[] (each quote includes rate, lockPeriod, apr, price, closingCost, etc.)
- adjustments[]
- parQuotes[]
- searchId
- productId

### 5.3 Consumer Amortization Schedule (for a chosen quote)

POST:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/bestexsearch/{searchId}/products/{productId}/amortizationschedule

Body:
{
"rate": number,
"lockPeriod": integer,
"loanLevelDebtToincomeRatio": number (optional)
}

Returns:

- amortizationSchedule[] (monthly payments)
- apr
- baseLoanAmount, totalLoanAmount, etc.

## 6) Full API (Complete Search)

### 6.1 Full Product Search (Initiating call)

POST:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/productsearch

Purpose:

- Returns all eligible products for scenario + optional guideline docs.
- Supports QM workflows (the request schema includes qmInformation).

Query params:

- productId (optional) — some workflows allow filtering/targeting a product.

Response includes:

- products[] (each has productId, rate, price, lockPeriod, etc.)
- searchId (string)

### 6.2 Full Product Details

GET:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/productsearch/{searchId}/products/{productId}

Purpose:

- Detailed pricing for product (all rate/price/lock combos)
- Includes adjustments, notes/advisories, and additional summary totals.

### 6.3 Full Amortization Schedule

POST:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/productsearch/{searchId}/products/{productId}/amortizationschedule

Body:
{
"rate": number,
"lockPeriod": integer,
"loanLevelDebtToincomeRatio": number (optional)
}

### 6.4 Lender Fees

GET:
/api/businesschannels/{businessChannelId}/originators/{originatorId}/productsearch/{searchId}/products/{productId}/lenderfees

Purpose:

- Fetch configured lender fees (especially those that affect APR).
  Notes:
- The docs emphasize lender fees must be configured inside Optimal Blue to make the generated APR accurate.

### 6.5 Guideline Document

GET:
/api/guideline?isIndex={boolean}&value={string}

Purpose:

- Fetch a guideline document (fileContents, fileName, contentType).

## 7) The IDs You Must Carry Through (Critical)

### searchId

- Returned by the initial search responses (BestExSearch or Full Product Search).
- Used in subsequent “details / fees / amortization” requests.

### productId

- Returned in each product object inside the initial search response.
- Used with searchId to fetch details.

Practical rule:

- You don’t “invent” searchId/productId — you always get them from the initiating search response.

## 8) Minimal Implementation Checklist (So We Don’t Screw Up)

- [ ] Choose product family:
  - Consumer best-execution: /consumer + bestexsearch
  - Full results: /full + productsearch
- [ ] Always send headers:
  - Authorization: Bearer <token>
  - api-version: 4
- [ ] Always include required path params:
  - businessChannelId
  - originatorId
- [ ] Store and reuse:
  - searchId returned from initiating search
  - productId from returned products[]
- [ ] For amortization schedule:
  - pick a quote (rate + lockPeriod) from the product details response
  - call amortizationschedule with that rate + lockPeriod

## 9) Example Call Patterns (Pseudo)

### Consumer: Best Execution Search → Product Details → Amortization Schedule

1. POST /consumer/.../bestexsearch -> returns { searchId, products[] }
2. GET /consumer/.../bestexsearch/{searchId}/products/{productId} -> returns quotes[]
3. POST /consumer/.../bestexsearch/{searchId}/products/{productId}/amortizationschedule with { rate, lockPeriod }

### Full: Full Search → Product Details → Fees → Amortization

1. POST /full/.../productsearch -> returns { searchId, products[] }
2. GET /full/.../productsearch/{searchId}/products/{productId} -> returns quotes[]
3. GET /full/.../productsearch/{searchId}/products/{productId}/lenderfees
4. POST /full/.../productsearch/{searchId}/products/{productId}/amortizationschedule with { rate, lockPeriod }

## 10) Response Handling Notes

- 200: success with JSON payload
- 204: “No Content” means no results for the scenario (handle gracefully)
- 400/404/409: handle by surfacing error information and/or fallback messaging

## 11) Where the “Scenario” Data Lives

Initiating requests require 3 big containers (names differ slightly between Consumer vs Full):

- borrowerInformation
- propertyInformation
- loanInformation
  (+ qmInformation exists in Full search request)

When implementing:

- Build a single internal “Scenario” object in our app
- Transform/marshal it into the correct request schema for the chosen API

--- END ---
