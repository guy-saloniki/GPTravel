import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/'],
});

export const config = {
  matchMedia: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
