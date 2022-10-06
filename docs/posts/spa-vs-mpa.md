---
title: "Single Page Apps VS Multi Page Apps"
date: "10/5/2022"
desc: "The differences between Single Page Web Apps and Multi Page Web Apps."
longDesc: "The various differences between Single Page Web Apps and Multi Page Web Apps on the web. This post covers each one and some uses of them"
tags:
    - svelte
    - sveltekit
    - vite
    - js
    - blog
    - site
    - web
    - react
    - angular
    - spa
    - mpa
    - app
    - web-app
---

## Introduction

In this era of web apps, every web app needs to get content to the user. How each web app does this varies, which is why in this post I will cover the two methods of doing this.

## What are SPA's and MPA's?

### MPA

An MPA (Multi Page Application) is a web application that has multiple separate pages.

Whenever you request a page, say, `/about`, it will return a completely new page with what you want. This is the traditional way of making web apps.

Each page on your app is separate HTML document, and is served separately.

### SPA

In an SPA, your app is one single page which reads the URL to figure out what to display and what data to get from the server.

Whenever you request `/about`, it will get the text content and then display it, without getting an entire separate page, and then put that text content into the root web page.

This makes your app feel more like a native app, as you only are grabbing the bare minimum you need whenever you click something.

There is only a single actual HTML document, and all the rest of the content in the website is put on that page when needed.

## The pros and cons

SPA's are great because they make the app once fully loaded much quicker. The only thing that might take a while is the initial load for your entire website.

However, SPA's take a hit when it comes to Search Engine Optimization, as search engines like Google are use to normal MPA's.

Additionally, many SPA's are rendered completely broken without Javascript.

MPA's are great because of their superior SEO optimization.

They can also work without Javascript, which is another bonus.

However, MPA's will have a larger loading time whenever you switch pages, which may be a deal-breaker depending on what app your making.

## Implementations

Many apps such as [Twitter](https://twitter.com) are SPA's. SPA's are becoming increasingly popular in the modern era of web apps. Some apps are even a hybrid of the two.

## Conclusion

Web apps are awesome, and when you build your next web app think carefully of what type of web app you want to make and what tools you're going to use.
