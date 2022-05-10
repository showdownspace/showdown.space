---
sponsors:
  - name: 'Sponsor #1'
---

# Code in the Wind #1

A game show for Tailwind CSS users.

**Date:** Tuesday, May 17, 2022 @ 19:00 (+7:00) \
**Location:** Online (Discord)

::: warning UNDER CONSTRUCTION
This page is a stub. For the latest news, check out the [Facebook event page](https://www.facebook.com/events/5398524660192656/).
:::

## About Code in the Wind

**Code in the Wind** is a game show where contestants implement a web page according to the reference screenshot and a set of objectives using [Tailwind CSS](https://tailwindcss.com/).

![](./format.jpeg)

<UnderConstruction>

## Final ranking

<table>
<thead>
<tr>
<th>#</th>
<th style="width: 80%">Name</th>
<th>Score</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">1.</td>
<td><strong><a href="">@githubuser</a></strong> (Full Name)</td>
<td>99</td>
</tr>
<tr>
<td colspan="2" style="font-size: 0.8em">
Nesciunt mollitia, ab deserunt recusandae deleniti sapiente eveniet earum officiis consequatur error eos voluptatem eligendi officia totam laboriosam, itaque quam quis.
</td>
</tr>
<tr>
<td rowspan="2">2.</td>
<td>DiscordUser#1234</td>
<td>98</td>
</tr>
<tr>
<td colspan="2" style="font-size: 0.8em">
Debitis reiciendis non quidem molestias vero libero dolorem voluptas doloremque quasi explicabo inventore, perspiciatis culpa quis minima nam velit.
</td>
</tr>
<tr>
<td rowspan="2">3.</td>
<td><span style="opacity:0.64">(anonymous)</span></td>
<td>97</td>
</tr>
<tr>
<td colspan="2" style="font-size: 0.8em">
Officiis dolor vero expedita eos deleniti velit, magnam placeat. Harum nemo totam nobis beatae maxime, assumenda, aspernatur commodi debitis molestias ducimus aliquam repellat.
</td>
</tr>
</tbody>
</table>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.5em;">
<a href="#sponsor-1"><img src="https://placehold.co/1200x480"></a>
<a href="#sponsor-2"><img src="https://placehold.co/1200x480"></a>
<a href="#sponsor-3"><img src="https://placehold.co/1200x480"></a>
<a href="#sponsor-4"><img src="https://placehold.co/1200x480"></a>
</div>

</UnderConstruction>

## Sponsors

<SponsorList />

## Challenges

<style scoped>
  .challenge {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    gap: 1rem;
  }
  .challenge-reference {
    flex: 1 0 270px;
    width: 270px;
    text-align: center;
    margin-top: 1rem;
  }
  .challenge-reference img {
    width: 270px;
    box-shadow: 0 0.2rem 0.5rem #0004;
  }
  .challenge-objectives {
    font-size: 0.875em;
    flex: 99999 1 64%;
  }
  .challenge-objectives > ul {
    padding-left: 0;
  }
  .challenge-objectives > ul > li {
    margin-bottom: 0.5rem;
  }
  .roundresults {
    display: flex;
    gap: 0.5rem;
  }
  .roundresults-item {
    flex: 1 0 0;
    font-size: 0.75rem;
    text-align: center;
  }
  .roundresults-item img {
    box-shadow: 0 0.1rem 0.25rem #0004;
  }
</style>

### Example challenge #1

<div class="challenge">
<div class="challenge-reference">
<img src="https://citw01.pages.dev/example/reference.png">
</div>
<div class="challenge-objectives">

- สร้างปุ่มกดรหัสผ่าน เป็นกริด มี 4 แถว แต่ละแถวมี 3 คอลัมน์
  - ประกอบไปด้วยปุ่มตามนี้: ((1, 2, 3), (4, 5, 6), (7, 8, 9), (0, delete))
  - ปุ่มตัวเลขเป็นรูปวงกลม มีขอบสีเทา ส่วนตัวเลขให้จัดให้อยู่ตรงกลางข้างในวงกลม โดยแต่ละปุ่มควรเว้นระยะห่างระหว่างกัน
  - ปุ่ม delete ไม่มีขอบ ใช้รูปจาก URL นี้ได้เลย [`https://i.showdown.space/e01/delete-icon.svg`](https://i.showdown.space/e01/delete-icon.svg)
- สร้างวงกลม 6 วงเล็กๆ เรียงกัน เพื่อแสดงสถานะการใส่รหัสผ่าน PIN
  - ให้วงกลม 2 วงแรกเป็นสีทึบ
- ใส่ข้อความ “กรุณาใส่รหัสผ่าน” ตรงด้านบน
- ใส่ข้อความ “ลืมรหัสผ่าน” ตรงข้างล่าง
  - เนื่องจากเป็นลิงค์ สีควรจะแตกต่างจากสีข้อความทั่วไป และมีขีดเส้นใต้
- ใส่ปุ่มปิดเป็นรูปกากบาท ตรงมุมบนขวาของหน้าจอ
  - ไม่มีรูปให้ ให้วาดเองด้วย HTML
  - เส้นของกากบาทควรหนาแค่ 1px เท่านั้น

</div>
</div>

### Example challenge #2

<div class="challenge">
<div class="challenge-reference">
<img src="https://citw01.pages.dev/example2/reference.png">
</div>
<div class="challenge-objectives">

- ใส่ข้อความ _Game format_ ขนาดใหญ่ เป็นตัวหนา
- สร้างข้อความสามแถว สำหรับรอบ _Qualifiers_, _Semi-finals_ และ _Finals_ ตามรูป
  - Qualifiers มี 4 รอบ
  - Semi-finals มี 2 รอบ
  - Finals มีรอบเดียว
- ใต้ข้อความของแต่ละรอบ ใส่วงกลมตามจำนวนคนในรอบ
  - Qualifiers รอบละ 8 คน
  - Semi-finals กับ Finals รอบละ 4 คน
- ทำให้วงกลมเป็นเส้นประ ยกเว้นคนที่ผ่านเข้ารอบต่อไปหรืออยู่ในรอบ Finals ให้ทำเป็นเส้นทึบและมีพื้นหลังอ่อนๆ ตามรูป
- ทำเส้นเชื่อมจากรอบ Qualifiers → Semi-finals และ Semi-finals → Finals

</div>
</div>

<UnderConstruction>

### Qualifiers #1

<div class="roundresults">
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
<div class="roundresults-item"><img src="https://placehold.co/540x720"><div>name of</div></div>
</div>

### Qualifiers #2

### Qualifiers #3

### Qualifiers #4

### Semi-finals #1

### Semi-finals #2

### Finals #1

</UnderConstruction>

## Staffs

- [Thai Pangsakulyanont](https://dt.in.th/)
- Nattpapat Pinyopusarerk
- [Siriwat Kunaporn](https://siriwatk.dev/)
- [Kanisorn Sutham](https://heyfirst.co/)
- [Manassarn Manoonchai](https://narze.live/)
- Pakawat Anekwiroj
- Narawit Tubtimtoe

## Acknowledgements

This game is inspired by:

- [Code in the Dark](http://codeinthedark.com/)
- [DevWars.tv](https://www.devwars.tv/)

## Sponsor Details

<SponsorDetails />
