const haircuts = [
  {
    name: "Afro",
    price: 84,
    imageUrl:
      "https://www.shutterstock.com/image-photo/beautiful-afro-business-man-600nw-535445056.jpg",
  },
  {
    name: "Afro puff",
    price: 515,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Asymmetrical cut",
    price: 956,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Bald",
    price: 523,
    imageUrl:
      "https://www.shutterstock.com/image-photo/young-bald-man-beard-wearing-600nw-554299060.jpg",
  },
  {
    name: "Bald fade",
    price: 161,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Bob",
    price: 200,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Bob cut",
    price: 932,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Braids",
    price: 844,
    imageUrl:
      "https://hairdresserburtonsvillemd.com/wp-content/uploads/2023/05/Senegalese-Twists.jpg",
  },
  {
    name: "Braid out",
    price: 526,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Braided crown",
    price: 724,
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSFBIYGBISEhESERIYEhIREhgRGBgaGRgZGBgcIS4lHR4rHxgYJjgmKy8xNTU1GiQ7QDs1Py40NTEBDAwMEA8QHxISHzQrJCQ0NDQ0NDU0NDQ0NDQ0NDQ0NDQ0NDU0NDQ0NDY0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAABAwIEAwYEBAUDBQEAAAABAAIRAyEEEjFBBVFhBiJxgZGhEzJCsVLB4fAHI2Jy0UOS8RQzgtLiJP/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhEjFBUQQiMmFS/9oADAMBAAIRAxEAPwD0BKhChoAnSmoQPBTmlRylBQTtKeFA0qVpQPCcEwFOCIOShIlQKnAJoTkCoCEBAoCUJEkoHpVz3H+1NHCENjPUInIHBsN5uJ0CxH/xCOZsYbuGM5NTvC2re7ceOqzueM6XmGV9R3iHOAEkgAXJNhC8xx38SqjQ8MwwzEEUXCoHQdA57SBPOB0HVcnj+2GLxDfh13FzJ7zB/Lv5fYypuX0TH7e50sdReSG1GOLfmDXtcR4wrAIOi+d/+jIPxKbnXgmC7MN+80Xjw8VtcK7S47COBdUc+kSNT8RkcwRoqzNPg9wRC5jg/bChVa3OcjnAQ75mO8CNF0tOoHAEEEHQgyCr45S+lLjZ7PhEIlCsgQiEIQEIhCVAiWEJUCQhKhBgIQhEhCEIBCEIHtKkaVCCnNKCwCnhQtKlCByUJoTgiDglTQnBAqo8U4vQwrc1ao1g2Grj0a0XKyu2HaZmBpWh1epIpUzp1e7+ke68bx/Eald5qVXl7jqXG3gOnQKmWWuotjjv29I4h/EME5aFMATGd4zHyYDA8ysTG9psRUb3q78xnutysaPANAK46jigD3SSd8osPPYK9TxXxHtbJnOwNMA96fqv+45ErO7rWTGNbC0RUaatTvZgIky42nU/l/hVXVmFroaQ4NJbJmQujbwJzcO6sDAawASfqcQIHjPuubxNXZzAC0uAcJuHNMBwXPL22c0zEvzxuSQWkZmm+4OsrdwmGp1IkFpFi0mcrujjoPG355GGe0VBmE2GUm1uRW9hHvpkF1M5XGczbre/4yxm1zD0RSIz/KHATEEAzc7gg39VoObSgy0XkObGvUcwVKHsqNEiRFzF2n82Hltsoxwr8JJHKTbkQsrlG0wqphsM1jiGn+W7Vp1aYEOHMfvkuw7I457HGk50t2HLqOm6xcPwp2/7G4Wnw7DupPDpBi1xtopxzkqM+O6egNKVVsJVzNFjoOqshdcu3FQhCFIEqEIBCEIFQhCDAQhCJCEIQCEIQCcE1KEErFM1QsUoQPCUJoTgiDlW4ljmYei+s/5abHPPMxsFYC4X+K+PNPCMpA/92oJ/tZ3vvlUW6hJuvN+OcXqYyu6s/wCZ9mt1DWDRo/fNZb6RJ7xgCLanmenNQ55IE6kfcjX1T8xdcmAZgDrsFk12UObOUF2WbC5J62/wuj7P8MNZzWBkES9z5zWadG7CTAXO0HQYjx/U2XofYDAF2d5qAOe0Na3Tc7nx9lXPLUWwm61MTw2o3DGvWq5g092nmtJgNAaLTYnyTqfD8NisOHsAbUgGo2ZLXhtx6381Z4jwpzXt+K/+Vme58SQGm8+Ue6o08M2nnxOHfnZDyabiM3dbJB8Hfdclrojiq+AYX/DyDMzNocrjeZvYrYweLFNrabqZAGzwNP6SNVj0Kzi/M8SHHM4jYm8j0XSBodTEjMyJDrEee491vbfVVkm9xp4J9JwlogxM7eCu02CZAESIgLBwwa3TTod1s4WvYLKtsa1qVNTCkE3D6KwoKscLxWR2R3yuMDof8LcXLVRZbvCsRnpgn5m913iP0hdXBnv9a5OfDV8ouIQhdDnKkQhAqEIQKhCERtglInEJqLBCEIBCEIBOCaE5qCRqkao2qQIg8JU0JUDl5V/F6v8AzaTPw0y7/cf/AJXqTnhupA8SAvJ/4o1G1MU3L3g2kwGO8M0uMW8VTL0tjHntOn95tqEtW5jXp+uw6q03D1DYNyjd7rW6KRmCYP8AUudTln3lUuUi8xtRU7wWjXWLiy6PgnEXU3NiZmfBRcEwWFzd41Hk2s5tNo84MLt8DwXAPaPhw15sXue6oSeTeZ8gufkymXTfDG49nYntK6pTNNgBL2uYXkTAIIJg68o/4XM8H4qaDqwIkGm8tbqC9zco+y3hXwuDxH/TVmZjZxqBwsw5iB0IWFxbhZFQVG1IZDajSG7uJjN4NDYGnS6pjN3VW39MqhTqUxDqZAsSY0PMEfu61cNiXN+Qy36qZMebeX78EUqVQiAb7xIYfETb3HgntwdvluDYtIt4LW3aJil+MJnLfUgEAq9gMTJEkk7AyAq1LBv3aIWrgMABe+upWeTXGN3CPsFcCqUGQrbRZV0sY5XOAvhz2cwHDysfuFj8W4gzD0zUdro1u5cdFh9k+0VepjmU30w0VGvMRlIbBIN9dFrw42ZbY82rjY9PQhC7XCEIQgVCEIFQhCDDcE0qRyYUSahBQgEIQgE9qaEoQSNTwmBOCIPCUuAuU0FUeN4oUsPUqHRtNxmxvEAQdTMKt6Tp5J2048+ti35DNOmQxhmRAsSPOVgtxdQ6vP8AuKhxVRheQZtOhI9tFGMm33lZZRpKnfUm5d6mVGawG3mUzubyfH/Cu4OrTBg02u6OE+ypel52hwGLLzE92bDQHyXfdnuHYisDUByMYQzN9RPJo/MqbgnEKGTKWU6ZMDMGtYY8Yn7qfDdpGYeo+m29OM48XBkn1lZZ5b+GuMsc92t4d8OpSMnPUzscS4kwwgzfo8hSvxsmJ7jWtZ6N1/fJTdoMe/GPpim1pILiTBOXb0uPQKnV4FVYMwcHA/M3Q+iY612nxvwc6rkNt/H2VulVkd4hvIaE+JWT8GoLEGBoDPp4p9JjidT4b+qsmSuhwjS4622uCVvYRo05W/ysHh7H5bACbW18Fv4NuUxygecX+6zrWRoMCe+qGiSmFZ/FGvLHZdYMJEact2h4yBUIkOeNJ/7bG8zzctnsIKVSuKrXh7mAsc8EOGZzCYDhv02XnOOoubULaoee+XEAWeZ0O8aL1nszBw7MrMkQQ2A0gjey6P5krDdztnp2yVVMHis9nWcNRsRzCtromUs3HJlLLqhCEKUBKkQgVCEIhjOTCnuKYUWIkSlIgEIQgUJQmhOCBwKeFGE8IHhc52+qFuBeB9T6bT4TP5LoQVk9psL8XDObyLXehv7SqZeqmf1HgVRpmN+iG5vwkz0utDiGEdTqFhsWmxIBEbTKrljfqqSOQj7BZ73Nr60Y2m5xtTdfm9jfuVqYHgOLquhlNotJc6ox32NvRZzsbTYO5TLz+N+YNB6ARK1MNj6jozOJaBIaDkYOUMFlXK2fC2Ml+XTcD7JPFYNqva45M5DXlwmflJgXiTZYnamiaGKewalrS3qHaD2VrC8eq03ZQYBIe0xG0ELC4lin4mqHG5yhpPQH9VljLcu2vUnTqew+G+IDUILm0yGtaCBmeTpe0AQvQqrqgYCKDCDYNzHNGl+7C5DsE9rGPpD5mvDjzuP+V3hqtNIGJLZjw1+8qt7yre9Y49MM0KVUFvwMj4ktLWggE2NrEWNwqNbhoZFgR4QtivQDJqOMOc2ajugGg6DZNoup1GNqNeHscCWuBkGLFV1pbbPoNDGgxfbpebJ2HqX6ySfZJiWy6BskwzNT5BRteRp/EsonulRsckL1baNIKmEpkyWNJ5kAq/g3ZbDQbKsXKI1YjxU7VyxdAHzBBhwuHDUFaGDx2d3w3WcBII0cBr4HoubxWMa1oDBmedG6DxJ2C1+CcOqMPxarpcW5WtAIDQdSZ329VtxXLfTm5scZju+/htJUiF1OMqEIRBUJEIMVxTSUpSFFiIQhAIQhAJQmpQUDwUoKaClBRB4KR7Q4Fp0IhIClBVR5l2s4UHvLGiK1MEhptnpxYsO8ctoXAVqQBOYQQYdbfruvc+0nDBWp5wP5lPvNO8ch1XmvEaNOtuG1bgP2dH4hv9+crC/pdfDeftN/LA4VXDXDcdLg+IK7CnisA9jA6gA5zgDlpinO5PdMHRczhuHOzglhGVzQX/Tf2UmKeAMwJAa6B4EESfZVy1atjuN/tpUwxo030WgPFSABeKZabeoauS4fUyunmZnfyRjcTmZAJuREeN1XwwM6+anHHWPZcv26dJheIPwlVmIaCWHu1GjUsn7jVeoYLHMq0fiU3hzKjZY7k7keS8wo4cvpwRZJwnitbh7yA0voPPfp8urevRZ2b9e3TL1q+nrDmh7gTo0CBE+ywMNhKmFc+k0g4YF9SmCC17XPcXFt9RJKk4X2rwdWGtqBj3fQ8ZD7rRrYhjQ5xY2pIEEviCPy6qut9Xpbeu5NqtISCdypG04EKvhawcARyV1plUi1ulZ4URVt7FGWKTau5xCicJVpzEzIibluJsO9tMh8Duua93XKZ1XZUaoexr2/K9rXN2MESFwmCqU69YUnOLacwXAEB75+QO2E6nyXeMaGgNAgNAAGwAsAuvglkrg/Js3Ps9ASIW7nOSpEIgqEIQYhSFKU0osEIQgEISEoBJKQlJKB4KcCowU4FEHgpQUwFOBQOdouF7X9lHvccRhxLjepR2c78bRz8NV3IKVVyxlTLp40zFmnTdTdIcJJmc2fr6LGx9QOYQLZvZ0yQPAr0btz2fzziaQl4b36YElzRuI3A9gvM2sNR3dMkubEXmTy9PVYeOq38txAyn3QTbUHzv5arX4ThQ4+yndwd7GAvEbx1/YVjhjACJEeanK9J4526SjhQ1ogKKtgmu1b5LRwgDgIVl2HO4suTfbt6c/W4C0gPZTDjbMyQ0m4ILTFiPzKlw/Z95pwA9jM2ZzXPLnGBYGNrn25LosJTLTbRaOyt5XWlNTe3OYZ5YQOVlrUayzeKYctdmGipN4iWaqsXtdOHyghYFDjbCYlXmcRYd1bVUXiFWxBMJW4lp0KR7wUNosBw44ioGNeGNbDnakls3yDSeq76Vx3BB/+lmX+su/tyHX1C7BdfD/Lj/ItuUlOSpqVbOcqUJEIHITZQgxikSlIiwQhCBCmEpxUbigJSSmlyQOQSApwKjBSgoJQUoKjBSlyISFyY6oq76qjzqosF4KyK3CaLahqMpMY83c9tNocT1jmtAOQ9yWbWl05PjeCc6m95OgMdT15rm8FSvDl3PHyG0HcyQ0eZA+y5pmFsCubmvi6eGb7X8JhajRLHg/0u/IrVwuKLTFRpYeZuw/+QsqOAeQFqsqSIyzz0XLb26l0UQe8wweWxTmvHyuEO5H8uapU3tb8ss6H5P0VxtYOGVwvy18wVbatitjGiFynE2C9l0mNJb1CzMHhhVxDGH5TUGYc2t7xHoIU4TdRndYmcM7F1arQ97xTa4AtblL35ToSJAb6yt2l2HojWvVJ6fDaPQgrp5TgV3zDGOG8mVc8zsfSGlet60//AFUrOy1Mf69SPCmD6wt4FKCp8MfpHnl9q3D+G06AOQHMbOe45nEeOw6BXQU0FLKmST0ztt7pyVMBSypDpSymgpZQKhJKEGOUIQiwQhCBrlE9TFRPQQkpJQ5NlBICnAqEFODkE0qvWq7JXvgKo58qofKcHKIOShyCcOQ4qIOWdxfiYotgXqOHdHL+o9Pulup2mS26ilxzE/EqNpA2Ycz/AO46DyH3SNZZZ2CaTc3JJJJ1JOq02aLh5cvKu/injiibYq9SqqJmEqPu1hjXMbNjxK0MPwdwIzvAtJAkkeqY8WWXqJy5sMfdQkSinSee60EzoIJvzHJatPBU2g2LnbZjJAjlorDHugOaLCWwAB0Og8bLbH8b7rmy/K/5jLZgaz23DeU5r+gUvCuEOo1RUeWnunKBMgusCfKVonWRdty/0iw9E1zo1uCBlkkwPHf2utseHHG7jHLnyymqvmtBiOfsnNrD9xKzwYEasAifqnb7Jc83n8MzNh0WmmW2i2q2JmPFOFUc1l/EvqRNmjb38QlB2vtJuQTdNHk12vB3CesX4m99bKZmLc22vQpo21JSyq1HEh1tDyU4KJOlLKbKJQOQklCDKQhCLBCEIEKieplC9BXeo5TnlQFyCXMgvUWZQ16sWVQ+rVUAeoM6c1yCwHJwcmMovPQczZLWwrHtyl7jzynICNIJ1jXQjTqp0bjNx/GA05Kfefpm1APTmVnUuFYio7OWG9y55ynlMG/sujoU6dL5GBvzafNYbuN1J8W875WkDlHKdVS8fl/VWnL4/wAxn0ODNYJc+bxDRYn+5abMNTpzDd2wTd0bmT+SRxBMbOaTPW3vLdEZ9HfU0hrxrpb2hWx48cfUUy5MsvdWTVv0cAJuN7DwsnhwP1dc2s3sBboOt1Vb+DYnuuF5uJunh82JuIIg72Hh781dRLM6EBwBzcosANY2I5pW1NXN+a9rExAknlp0UJ0mIcIzG37j9EEzdvzGRExv1+97oJS8fNqLZpOv6pM240Iu2wIHXebwo89pFgCAR169UhcXSRZzpBB6m4I/O6CVrpMtIA2FpJi+9vHr1Te7vAdckmBy06eWyaauY8iIDb2JkDoDoR0SMdMA/MSTIMEyNjZBMyoYl31RlJiADz02E+aV86XjV1vACYULXH6r2LWmNefX2UhMWEXMTbY3CAmbxaCGiSd+R8OiGki/1GMu+vU6ahNDxMfSL3sPAnoZ89NUTv0bk2t0CB7XEafMTeNRfpvdaeDxObuk94CQeY/ysoOMC3eIgRzm0DXYIa/LEG8zM+3ig6EFLmVejVzNDuY91JKhZJKFHKEFFCEIsEIQgQqGoUIQU6rlXc5CEDS9Uq77pEKofh6RfeYA9VbaQ02AFrGJKEK0VyDqhkX/AA2/fgmB3dn+gEeRk/vqlQpVBcJJ3EPGtxpBOqM0AxbLN4k5SO9+aEIHBxNvFw2E7j2+yXPN9nd1w2BNp67+iEIFMzl2mGGAYEnXfZObJBnVojbWYv4yhCAMn+4EzN5cDYeEyla8u7wsc2UXm/WRe95SoQI0gmdLfLA6yJQx4JkCDOsmwDZm3/KVCCJtSRf6Wg22mb/YQnzMgiCbk6fTqI80IQKDq0/SDLZPjMaWnmnF50OpuOUDmddtEIQNINmz0tOpdAidE4kxOwywNQbiD0v6IQgaXEGSbnKRN+s+oSCpG/eIBPISJke/oEIQavDandynUX9VdzIQoWhcyRCEH//Z",
  },
  {
    name: "Bun",
    price: 267,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Buzz cut",
    price: 809,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Caesar cut",
    price: 228,
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/62db13858a6bfe435339dc46/mayvenn/0x0.jpg?crop=600,400,x0,y0,safe&height=400&width=600&fit=bounds",
  },
  {
    name: "Chignon",
    price: 948,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Comb over",
    price: 111,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Cornrows",
    price: 577,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Crew cut",
    price: 15,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Crop cut",
    price: 67,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Curls",
    price: 71,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Dreads",
    price: 474,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Dreadlocks",
    price: 864,
    imageUrl:
      "https://t3.ftcdn.net/jpg/02/24/99/88/360_F_224998874_n4b0diFTtyj8wXJogKndXqGOnjHatqOX.jpg",
  },
  {
    name: "Emo",
    price: 102,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Fade",
    price: 927,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Faux hawk",
    price: 859,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Fishtail braid",
    price: 709,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Finger waves",
    price: 971,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "French braid",
    price: 760,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0286/8926/8867/files/french-braid_600x600.png?v=1658342596",
  },
  {
    name: "French twist",
    price: 668,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "High top fade",
    price: 604,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Half up half down",
    price: 322,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Layers",
    price: 460,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Layered cut",
    price: 504,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Long hair",
    price: 207,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Mohawk",
    price: 707,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Mullet",
    price: 979,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Ombre",
    price: 863,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Pixie cut",
    price: 378,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Pompadour",
    price: 924,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Quiff",
    price: 196,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Shag",
    price: 422,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Slick back",
    price: 816,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Side part",
    price: 421,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Updo",
    price: 494,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Undercut",
    price: 260,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Wavy hair",
    price: 274,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    name: "Weave",
    price: 419,
    imageUrl: "https://placehold.co/600x400/EEE/31343C",
  },
];

module.exports = haircuts;
