## Introduction
This web app is designed by Farell Sujanto as a test submission for Pintu.co.id. This web app is designed using Next.js (React framework) with tailwind CSS & react-query as state management / API fetching. This app has passed linters.

The repo is linked to vercel, so any push commits will be built & served on vercel. https://test-pintu-farell-web.vercel.app/

## Getting Started
### Running the app
1. `yarn install`
2. `yarn dev`
3. Open `http://localhost:3000` 

### Running the tests
1. `yarn install`
2. `yarn test`
### Running linter
1. `yarn install`
2. `yarn lint`


## Features
1. Using tailwind CSS
2. Using react-query as API fetching & state management
3. Using typescript
4. Filter by time: 24h, 1w, 1m, 1y (mobile)
5. Using memo, useMemo, useCallback as standart for performance
6. Using hooks for state management
7. Using `getServerSideProps` for intial fetching data 
8. Mobile friendly design based on https://pintu.co.id/market


## Tradeoffs
1. Using `getServerSideProps` means longer initial loading time & we won't be using shimmer as loading indicator
2. Using memo, useMemo, useCallback may prove some glitches / bugs that are usually not present if not using so. ex: state not updating
3. Using typescript may prove more efforts for developing & type checking but it is quite essential in this age


## Assumptions
1. I create only the UI on the .pdf assignment
2. No dark modes
3. Search & tags filter are not available
4. No details page for each tokens
5. No Storybook


## Tests
- [index.test.tsx](/__tests__/pages/index.test.tsx) => For testing Home screen rendering & test rendering list components if served with dummy datas
- [marketListUtil.test.tsx](/__tests__/utils/marketListUtil.test.tsx) => For testing business logic of decoding the 2 API provided on the .pdf file into a single array of object to be shown on the list


## Improvements that could be made
1. Using design system & namings
2. Use faster list generation for larger lists
3. Shimmer for faster load

