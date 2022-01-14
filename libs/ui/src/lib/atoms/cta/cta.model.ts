import { Params } from '@angular/router';

export type CTALink = {
  text: string;
  href?: string;
  routerLink?: string | any[] | null | undefined;
  queryParams?: Params | null;
  fragment?: string;
};
