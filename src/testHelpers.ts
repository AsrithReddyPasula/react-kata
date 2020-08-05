import { RenderResult } from "@testing-library/react";

export function expectRenderedComponent(component: RenderResult) {
  return {
    toContainText: function (expectedText: string) {
      const matchingText = component.getByText(expectedText);
      expect(matchingText).toBeInTheDocument();
    },
    toNotContainText: function (expectedText: string) {
      const matchingText = component.queryByText(expectedText);
      expect(matchingText).toBeNull();
    },
  };
}

export function expectElementToContainExternalLink(
  element: any,
  linkText: string,
  href: string
) {
  const link = element.getByText(linkText) as HTMLLinkElement;
  expect(link.href).toEqual(href);
  expect(link.target).toEqual("_blank");
  expect(link.rel).toEqual("noreferrer noopener");
}
