# HTML Modifiction Prevention

## About

This JavaScript code is intended to be added to any static HTML web page to prevent modification of the page’s HTML by an end-user. It does this by caching the page's body (or any element that is chosen) HTML after D milliseconds following the page's completion of DOM content loading. The cached HTML is checked with the current page’s HTML every T milliseconds. If the cached and current HTML do not equal one another, the page's HTML is overwritten with the cached HTML.

## Intended Usage

This code is intended to prevent a common banking scam where a scammer remotely connects to a target's computer and modifies the HTML on the target's bank's website to show the false transfer of money that is calmed to be accidentally transferred in a higher amount than intended. The scammer then requests the target to purchase a gift card for the difference between the falsely transferred amount and the amount that was intended to be transferred. By preventing the modification of the bank's HTML, the scammer is unable to show the target the false transfer of money, thus preventing them from continuing with one aspect of their scam.

## Settings

| veriable | default | usage |
| -- | -- | -- |
| d | 3e3 or 3000 ms or 3s |  |
| t | 6e4 or 60000 ms or 1m | |
