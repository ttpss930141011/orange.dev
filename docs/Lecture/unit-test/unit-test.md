# 測試有時間再寫？你就是不寫才會沒時間！ — 2022/12/03

主講人Kuma

直播連結：[https://youtu.be/KvVrhq2thp0](https://youtu.be/KvVrhq2thp0)

# 破題

![Untitled](./img/Untitled.png)

# 為甚麼會沒時間？

![Untitled](./img/Untitled%201.png)

# 什麼是好設計？

這個答案大家都知道。

![Untitled](./img/Untitled%202.png)

![Untitled](./img/Untitled%203.png)

這五點，有四點跟修改有關係，有一點跟抽象有關係。

![Untitled](./img/Untitled%204.png)

S.O.L.I.D.原則

![Untitled](./img/Untitled%205.png)

醜歸醜，但是使用者在意醜這件事情嗎？醜是他面對最大的force嗎？

![Untitled](./img/Untitled%206.png)

![Untitled](./img/Untitled%207.png)

很多人在聊design parttern、parrtern、很多人在聊設計，很多在聊Architure，但都是solution domain。

沒有人再用solution去套problem的。

> ***設計就是決定form與context的邊界。***
> 

你把form跟context決定好了，你在想一個solution去套那個邊界，跟邊界越吻合，你的solution會越match，你的解決才會更精準。

客戶通常會拿著spec來找你，你的工作會是：

1. 想一個solution幫客戶解決問題
2. 照著需求幫客戶寫出了一個需求

2比較常發生的是，你寫完了程式寫了很辛苦很漂亮很正確，但是客戶覺得不好用，最後還是要改阿

![Untitled](./img/Untitled%208.png)

沒有context無法判斷這個設計好不好，賣給有第三性的國家，這個設計就不好，因為他們會說你歧視。

![Untitled](./img/Untitled%209.png)

1970 Winson rose

瀑布模型，在一開始寫成論文時作者就定義這個模型是很不成功的，以上的圖是永遠不會成真，最後的流程永遠都會變成以下：

![Untitled](./img/Untitled%2010.png)

![Untitled](./img/Untitled%2011.png)

藍色線是瀑布模型會遇到的問題

![Untitled](./img/Untitled%2012.png)

黑色線的周期有多大，取決於你的交付週期，

![Untitled](./img/Untitled%2013.png)

![Untitled](./img/Untitled%2014.png)

測試給你重構的勇氣

軟體是科學，他必須要經由重複的實驗，證明他是對的。

![Untitled](./img/Untitled%2015.png)

先寫測試，你沒有細節可以參考，如果你的測試parpare太多暫時的state，測試會容易壞，容易脆弱。

如果你先寫測試，先把一些input output先寫出來，把行為敘述出來，把流程，程式函式的介面先定義好，現在的IDE會在你要打的程式先產出你code，你只需要填入你的少許程式碼。反過來就是兩邊都得打。

> 支持重構才能支持好的設計，你的測試可以支持你的重構。
> 

![Untitled](./img/Untitled%2016.png)

![Untitled](./img/Untitled%2017.png)

![Untitled](./img/Untitled%2018.png)

![Untitled](./img/Untitled%2019.png)

![Untitled](./img/Untitled%2020.png)

但大部分人不會想等這個delay time

![Untitled](./img/Untitled%2021.png)

叫QA去做RD原本要做的事情，是一件捨本逐末的事情。

捨本逐末：我有一個根本解，但是我去選擇快速解，但是快速解的結果是對我現在的情況是有害的。

![cyclelife](./img/Untitled%2022.png)

cyclelife

CI是圍繞在核心實踐外的，是團隊協作

CD在最外層

![Untitled](./img/Untitled%2023.png)

### **每週工作 40 + 20 小時**

在 Clean coder 裡面提到，你每週應該工作 60 小時， 40 小時給老闆， 20 小時給自己。這 20 小時你應該用來看書、練習、學習，或做其他提能提升職業能力的事情，因為職涯發展是你自己的事。

你或許會說那我的家庭、我的生活怎麼辦，我應該為工作犧牲這些嗎？

一週有 168 小時，扣掉剛剛說的 60 小時，再留每天 8 小時，一週共 56 小時睡覺，應該還有 52 小時可以做其他的事情(168 - 60 - 56 = 52)。

# **滿滿的挫折**

當你學會了寫一些測試後，想把測試應用在公司的專案上時，你一定會遇到滿滿的挫折，因為太多 legacy code 改不動。所以這邊有些建議

- 從新的專案開始
- 從新加的功能開始
- 從有 Bug 的地方開始
- 你想要改善你的設計的時候