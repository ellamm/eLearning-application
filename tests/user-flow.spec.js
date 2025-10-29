import { test, expect } from "@playwright/test";

test("user can search and filter courses", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/eLearning Application/);

  await page.waitForSelector('a[class*="tileComponent"]', {
    state: "visible",
  });

  const initialTiles = await page.locator('a[class*="tileComponent"]').count();
  expect(initialTiles).toBe(6);

  const searchInput = page.getByPlaceholder(
    /search courses, learning paths, or media/i
  );
  await searchInput.fill("React");

  await page.waitForTimeout(300);
  await expect(page.getByText("React Fundamentals")).toBeVisible();
  await expect(page.getByText("Agile Project Management")).not.toBeVisible();
  await expect(page.getByText(/showing 1 of 1/i)).toBeVisible();

  await page.getByRole("button", { name: /clear search/i }).click();
  await page.waitForTimeout(300);

  const afterClear = await page.locator('a[class*="tileComponent"]').count();
  expect(afterClear).toBe(6);
});

test("user can navigate to component details and back", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /learning status/i })
  ).toBeVisible();

  const tiles = page.locator('a[class*="tileComponent"]');
  await expect(tiles.first()).toBeVisible();

  const firstTileText = await tiles.first().locator("h3").textContent();
  await tiles.first().click();

  await page.waitForURL(/\/component\//);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.goBack();

  await expect(
    page.getByRole("heading", { level: 1, name: /learning status/i })
  ).toBeVisible();
  await expect(page.getByText(/showing \d+ of \d+/i)).toBeVisible();
  await expect(tiles.first().locator("h3")).toContainText(firstTileText);
});

test("user can load more courses with pagination", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /learning status/i })
  ).toBeVisible();
  await expect(page.getByText(/showing 6 of \d+/i)).toBeVisible();
  const initialCount = await page.locator('a[class*="tileComponent"]').count();
  expect(initialCount).toBe(6);

  const loadMoreButton = page.getByRole("button", { name: /load more/i });
  await expect(loadMoreButton).toBeVisible();

  await loadMoreButton.click();
  await expect(page.getByText(/showing 12 of \d+/i)).toBeVisible();
  const afterFirstLoad = await page
    .locator('a[class*="tileComponent"]')
    .count();
  expect(afterFirstLoad).toBe(12);

  await loadMoreButton.click();
  await expect(page.getByText(/showing 13 of \d+/i)).toBeVisible();
  const afterSecondLoad = await page
    .locator('a[class*="tileComponent"]')
    .count();
  expect(afterSecondLoad).toBe(13);

  await expect(loadMoreButton).not.toBeVisible();
});
