### mặc định

```css
html {
    font-size: 62.5%;
}
body {
    font-family: Noto Sans JP, san-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
}
```

### run scss

```
cd css
sass --watch styles.scss:styles.css
```

<details>
<summary>Container</summary>

```css
.container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
}

.container_fluid {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}
```

</details>
<details>
<summary>Font Family</summary>

```css
.class-name {
    @extend %ff-[noto-sans, roboto, poppins, ..., custom];
}
```

</details>

<details>
<summary>Font Size</summary>

```css
.class-name {
    @extend %fz-[14, 16, 18, ..., custom];
}
```

bảng hạ font

| size ở PC | size ở SP |     |     | size ở PC | size ở SP |
| --------: | --------- | --- | --- | --------- | --------- |
|     10~12 | 10        |     |     | 101~110   | 38        |
|     13~15 | 12        |     |     | 111~120   | 40        |
|     16~18 | 14        |     |     | 121~130   | 42        |
|     19~22 | 16        |     |     | 131~140   | 44        |
|     23~29 | 18        |     |     | 141~160   | 46        |
|     30~34 | 20        |     |     | 161~180   | 48        |
|     35~39 | 22        |     |     | 181~200   | 50        |
|     40~44 | 24        |     |     | 201~220   | 52        |
|     45~49 | 26        |     |     | 221~240   | 54        |
|     50~60 | 28        |     |     | 241~260   | 56        |
|     61~70 | 30        |     |     | 261~280   | 58        |
|     71~80 | 32        |     |     | 281~300   | 60        |
|     81~90 | 34        |     |     | 301~350   | 70        |
|    91~100 | 36        |     |     | 351~400   | 80        |

</details>

<details>
<summary>Font Weight</summary>

```css
.class-name {
    @extend %fw-[100, 200, ..., 900];
}
```

|          extend | css              |
| --------------: | ---------------- |
| @extend %fw-100 | font-weight: 100 |
| @extend %fw-200 | font-weight: 200 |
| @extend %fw-300 | font-weight: 300 |

</details>

<details>
<summary>Letter Spacing</summary>

```css
.class-name {
    @extend %lts-[-100, 0, 100, ..., custom];
}
```

|            extend | css                    |
| ----------------: | ---------------------- |
| @extend %lts--100 | letter-spacing: -0.1em |
|    @extend %lts-0 | letter-spacing: 0      |
|  @extend %lts-100 | letter-spacing: 0.1em  |

</details>

<details>
<summary>Text Align</summary>

```css
.class-name {
    @extend %txt-[l-c-r];
    @extend %[md, lg, xl, xxl]-txt-[l, c, r];
}
```

|              extend | css                                          |
| ------------------: | -------------------------------------------- |
|      @extend %txt-l | text-align: left                             |
| @extend %txt-rigrht | text-align: right                            |
|      @extend %txt-c | text-align: center                           |
|   @extend %md-txt-c | @media min-width (768px): text-align: center |
|   @extend %lg-txt-r | @media min-width (992px): text-align: right  |

</details>

<details>
<summary>Font Feature Settings</summary>

```css
.class-name {
    @extend %txt-p;
}
```

|         extend | css                           |
| -------------: | ----------------------------- |
| @extend %txt-p | font-feature-settings: "palt" |

</details>

<details>
<summary>Text Phone Number</summary>

```css
.class-name {
    @extend %txt-phone;
}
```

|             extend | css                                            |
| -----------------: | ---------------------------------------------- |
| @extend %txt-phone | @media min-width (768px): pointer-events: none |

</details>
