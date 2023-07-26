This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Description about the way of doing the task:

1. first we created two interfaces in the folder types called user and repository, for typescript errors and ...
2. then we head back to pages folder and create a route called [username].tsx for dynamice search for users , we used useState react hooks for tracking props like forking and stars and ...
 and useEffect for useing fetched data's from api. api's were fetched with axios, and data's were sorted there with es6 arrow functions. then we used those functions in JSX.
3. Create new folder named "components" inside src directory which will contain all reusable components like. we create userProfile.tsx for each users wrapper template.
repositoryList.tsx for useing it for most popular user's section (a template with map function that will apply elements for each prop). and also a searchInput component that uses react useState hook for tracking the input text and then grab it and then filter it for searching in the most popular file.
4. in the most popular route we use the hook useState for tracking the repository array for pushing popular account inside it, then with useEffect we run the function that we fetched the api with it useing axios, for creating a sideEffect to use it for sorting and filtering by 10. and in the last part we put our components inside JSX to use them as a template.
5. in the last part we changed the index.tsx for output and completing the task...

Hope it's okay and acceptable :)
