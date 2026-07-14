import { createBrowserRouter } from 'react-router';
import { RootLayout } from './RootLayout';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { ArchiveDetailPage } from './pages/ArchiveDetailPage';
import { SearchPage } from './pages/SearchPage';
import { ReportPage } from './pages/ReportPage';
import { ManagePage } from './pages/ManagePage';
import { SettingsPage } from './pages/SettingsPage';

// Vite exposes BASE_URL at runtime. Strip trailing slash for React Router basename.
// e.g. '/my-repo/' → '/my-repo',  '/' → '/'
const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: 'country/:countryCode', Component: CountryPage },
        { path: 'archive/:id', Component: ArchiveDetailPage },
        { path: 'search', Component: SearchPage },
        { path: 'report', Component: ReportPage },
        { path: 'manage', Component: ManagePage },
        { path: 'settings', Component: SettingsPage },
      ],
    },
  ],
  { basename }
);
