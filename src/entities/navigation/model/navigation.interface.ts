export interface INavLink {
  title: string;
  href: NavLinkHrefT;
}

export type NavLinkHrefT = "/" | "docs" | "actual" | "contacts";
