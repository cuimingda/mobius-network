import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

test('homepage includes official company names', () => {
	assert.match(html, /杭州墨笔悟斯网络科技有限公司/);
	assert.match(html, /Hangzhou Mobius Network Technology Co\., Ltd\./);
});

test('homepage includes key company registration details', () => {
	const requiredContent = [
		'91330110MA8GHBT389',
		'有限责任公司（自然人独资）',
		'崔明达',
		'壹万元整',
		'2024 年 11 月 06 日',
		'浙江省杭州市余杭区仓前街道良睦路 1399 号 21 幢 207-A0988（自主申报）',
		'技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广',
		'软件开发',
		'人工智能应用软件开发',
	];

	for (const text of requiredContent) {
		assert.ok(html.includes(text), `expected built homepage to include "${text}"`);
	}
});

test('homepage includes footer copyright text', () => {
	assert.ok(html.includes('© 2026 杭州墨笔悟斯网络科技有限公司'));
});

test('homepage hero heading and summary are not width constrained on desktop', () => {
	assert.ok(!html.includes('max-width:11ch'));
	assert.ok(!html.includes('max-width:60ch'));
});

test('homepage highlights supported delivery formats', () => {
	const deliveryFormats = ['Apple Developer', '微信小程序', 'Web App', '桌面应用'];

	for (const text of deliveryFormats) {
		assert.ok(html.includes(text), `expected built homepage to include "${text}"`);
	}
});
