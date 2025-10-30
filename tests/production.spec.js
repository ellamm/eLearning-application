import { test, expect } from "@playwright/test";
test.describe("Production site - Main Page", () => {
  test("main page loads and css style applied", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/eLearning Application/);

    const heading = page.getByRole("heading", {
      level: 1,
      name: /learning status/i,
    });
    await expect(heading).toBeVisible();

    const color = await heading.evaluate(
      (el) => window.getComputedStyle(el).color
    );
    expect(color).not.toBe("rgb(0, 0, 0)");

    const fontFamily = await heading.evaluate(
      (el) => window.getComputedStyle(el).fontFamily
    );
    expect(fontFamily).toContain("Playfair Display");

    await expect(page.getByText(/showing \d+ of \d+/i)).toBeVisible();
    const tiles = page.locator('a[class*="tileComponent"]');
    await expect(tiles.first()).toBeVisible();

    const loadMoreButton = page.getByRole("button", { name: /load more/i });
    await expect(loadMoreButton).toBeVisible();
  });

  test("images load without errors", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { level: 1, name: /learning status/i })
    ).toBeVisible();

    const images = page.locator("img");
    const imageCount = await images.count();
    expect(imageCount).toBe(6);

    for (let i = 0; i < Math.min(6, imageCount); i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });
});

test.describe("Production site - Detail Page", () => {
  test("detail page loads with all elements @desktop", async ({ page }) => {
    test.skip(test.info().project.name.includes("Mobile"), "Desktop only test");
    await page.goto("/");

    const tiles = page.locator('a[class*="tileComponent"]');
    await expect(tiles.first()).toBeVisible();
    await tiles.first().click();

    await page.waitForURL(/\/component\//);

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("img").first()).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /description/i })
    ).toBeVisible();
    await expect(page.getByText("Start date")).toBeVisible();
    await expect(page.getByText("End date")).toBeVisible();
    await expect(
      page.locator("aside").getByText("Learning mode")
    ).toBeVisible();

    const copyLinkButton = page.getByRole("button", {
      name: /copy link to clipboard/i,
    });
    await expect(copyLinkButton).toBeVisible();
    await expect(copyLinkButton).toBeEnabled();

    const emailShareButton = page.getByRole("button", {
      name: /share via email/i,
    });
    await expect(emailShareButton).toBeVisible();
    await expect(emailShareButton).toBeEnabled();

    const backButton = page.getByRole("link", { name: /back/i });
    await expect(backButton).toBeVisible();
  });
});
