import { test, expect } from '@playwright/test'

test('获取剪切框数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#get-crop-box-data')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(3) > .icon > path:nth-child(2)').click()
  await page.locator('div:nth-child(3) > .icon > path:nth-child(2)').click()
  await page.locator('div:nth-child(6) > .tiny-svg').click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(8)').click()
  await page.locator('div:nth-child(9) > .tiny-svg').click()
  await page.getByRole('button', { name: '获取裁剪框数据' }).click()
})
