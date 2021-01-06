export type Fruit = {
  /**
   * chiquita - always tasty
   */
  logoUrl: string;

  /**
   * banana-1000
   */
  name: string;

  type: "basic-fruit" | "extra-fruit" | "full-fruit";

  priceInCents: number;
  formattedPriceInCents: string;

  // unordered style
  extras: Extra[];

  // ordered/specific style
  extendedExp: Extra;
  warranty: Extra;
  bio: Extra;

  providersExtras: ProvidersExtras[];
};

type Extra = {
  type: "extendedExp" | "warranty" | "bio";
  a?: number;
};

type ProvidersExtras = {
  type: string;
  value: string;
};
