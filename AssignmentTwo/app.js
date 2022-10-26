const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/moviesdb")

const movieSchema = new Schema({
    title:
    {
        type: String,
        trim: true,
        required: [true, "Title Required"]
    },
    yearmade:
    {
        type: Number,
        trim: true,
        required: [true, "Year Made Required"],
        min: 1896,
        max: 2023
    },
    runtime:
    {
        type: Number,
        trim: true,
        required: [true, "Runtime Required"],
        min: 60,
        max: 600
    },
    category:
    {
        type: String,
        trim: true,
        required: [true, "Category Required"]
    },
    rating:
    {
        rating: ratingSchema
    },
    review:String
})
const Movie = mongoose.model('Movie', movieSchema)

//1
const dad = new Movie(
    {
        title: "Dumb and Dumber",
        yearmade: 1994,
        runtime: 107,
        category: "Comedy",
        rating: r1
    })
//2
const mphg = new Movie(
    {
        title: "Monty Python and The Holy Grail",
        yearmade: 1975,
        runtime: 91,
        category: "Adventure", 
        rating: r2
    })
//3
const os = new Movie({
    title: "Office Space",
    yearmade: 1999,
    runtime: 89,
    category: "Comedy",
    rating: r3
})
//4
const gb = new Movie(
    {
        title: "GhostBusters",
        yearmade: 1984,
        runtime: 105,
        category: "Action",
        rating: r4
    })
//5
const alrb = new Movie(
    {
        title: "Anchorman: The Legend of Ron Burgundy",
        yearmade: 2004,
        runtime: 94,
        category: "Comedy",
        rating:r5
    })
//6
const th = new Movie({
    title: "The Hangover",
    yearmade: 2009,
    runtime: 100,
    category: "Comedy",
    rating: r6
})
//7
const tj = new Movie(
    {
        title: "The Jerk",
        yearmade: 1979,
        runtime: 94,
        category: "Comedy",
        rating: r7
    })
//8
const fbdo = new Movie(
    {
        title: "Ferris Bueller's Day Off",
        yearmade: 1986,
        runtime: 103,
        category: "Comedy",
        rating: r8
    })
//9
const cs = new Movie({
    title: "Caddyshack",
    yearmade: 1980,
    runtime: 98,
    category: "Sport",
    rating: r9
})
//10
const nlah = new Movie(
    {
        title: "National Lampoon's Animal House",
        yearmade: 1978,
        runtime: 109,
        category: "Comedy",
        rating: r10
    })
//11
const bs = new Movie(
    {
        title: "Blazing Saddles",
        yearmade: 1974,
        runtime: 93,
        category: "Western",
        rating: r11
    })
//12
const tbl = new Movie({
    title: "The Big Lebowski",
    yearmade: 1998,
    runtime: 117,
    category: "Crime",
    rating: r12
})
//13
const sb = new Movie(
    {
        title: "Spaceballs",
        yearmade: 1987,
        runtime: 96,
        category: "Adventure",
        rating: r13
    })
//14
const hf = new Movie(
    {
        title: "Hot Fuzz",
        yearmade: 2007,
        runtime: 121,
        category: "Action",
        rating: r14
    })
//15
const pta = new Movie({
    title: "Planes, Trains, & Automobiles",
    yearmade: 1987,
    runtime: 93,
    category: "Drama",
    rating: r15
})
//16
const acpd = new Movie(
    {
        title: "Ace Ventura: Pet Detective",
        yearmade: 1994,
        runtime: 86,
        category: "Comedy",
        rating: r16
    })
//17
const sd = new Movie(
    {
        title: "Shaun of The Dead",
        yearmade: 2004,
        runtime: 99,
        category: "Horror",
        rating: r17
    })
//18
const ap = new Movie(
    {
        title: "Airplane!",
        yearmade: 1980,
        runtime: 89,
        category: "Comedy",
        rating: r18
    })
//19
const fyod = new Movie({
    title: "The 40-Year Old Virgin",
    yearmade: 2005,
    runtime: 116,
    category: "Romance",
    rating: r19
})
//20
const stb = new Movie(
    {
        title: "Step Brothers",
        yearmade: 2008,
        runtime: 98,
        category: "Comedy",
        rating: r20
    })
//21
const ku = new Movie(
    {
        title: "Knocked Up",
        yearmade: 2007,
        runtime: 129,
        category: "Romance",
        rating: r21
    })
//22
const nlcv = new Movie({
    title: "National Lampoon's Christmas Vacation",
    yearmade: 1989,
    runtime: 97,
    category: "Comedy",
    rating: r22
})
//23
const gd = new Movie(
    {
        title: "Groundhog Day",
        yearmade: 1993,
        runtime: 101,
        category: "Fantasy",
        rating: r23
    })
//24
const ds = new Movie(
    {
        title: "Dr. Strangelove or: How I Learned To Stop Worrying and Love The Bomb",
        yearmade: 1964,
        runtime: 95,
        category: "War",
        rating: r24
    })
//25
const yf = new Movie({
    title: "Young Frankenstein",
    yearmade: 1974,
    runtime: 106,
    category: "Comedy",
    rating: r25
})
Movie.insertMany([dad, mphg, os, gb, alrb, th, tj, fbdo, cs,
                  nlah, bs, tbl, sb, hf, pta, acpd, sd, ap, fyod,
                  stb, ku, nlcv, gd, ds, yf], (err) =>
                  {
                    if (err) {
                        console.log(err)
                      } else {
                        console.log("Documents saved to movie collection")
                      }
                  })

const ratingSchema = new mongoose.Schema(
    {
        rating:
        {
            type: String,
            enum: ['G', 'PG', 'PG-13', 'R', 'X','NA'],
            required: [true, "Rating Required"]
        }
    })
const Rating = mongoose.model("Rating", ratingSchema)
//1
const r1 = new Rating(
    {
        rating:"PG-13"
    })
//2
const r2 = new Rating(
    {
        rating:"PG"
    })
//3
const r3 = new Rating(
    {
        rating:"R"
    })
//4
const r4 = new Rating(
    {
        rating:"PG"
    })
//5
const r5 = new Rating(
    {
        rating:"PG-13"
    })
//6
const r6 = new Rating(
    {
        rating:"R"
    })
//7
const r7 = new Rating(
    {
        rating:"R"
    })
//8
const r8 = new Rating(
    {
        rating:"PG-13"
    })
//9
const r9 = new Rating(
    {
        rating:"R"
    })
//10
const r10 = new Rating(
        {
            rating:"R"
        })
//11
const r11 = new Rating(
    {
        rating:"R"
    })
//12
const r12 = new Rating(
    {
        rating:"R"
    })
//13
const r13 = new Rating(
    {
        rating:"PG"
    })
//14
const r14 = new Rating(
    {
        rating:"R"
    })
//15
const r15 = new Rating(
    {
        rating:"R"
    })
//16
const r16 = new Rating(
    {
        rating:"PG-13"
    })
//17
const r17 = new Rating(
    {
        rating:"R"
    })
//18
const r18 = new Rating(
    {
        rating:"PG"
    })
//19
const r19 = new Rating(
    {
        rating:"R"
    })
//20
const r20 = new Rating(
    {
        rating:"R"
    })
//21
const r21 = new Rating(
    {
        rating:"R"
    })
//22
const r22 = new Rating(
    {
        rating:"PG-13"
    })
//23
const r23 = new Rating(
    {
        rating:"PG"
    })
//24
const r24 = new Rating(
    {
        rating:"PG"
    })
//25
const r25 = new Rating(
    {
        rating:"PG"
    })

Rating.insertMany([r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, 
                   r13, r14, 15, 16, r17, r18, r19, r20, r21, r22, r23, r24, r25], (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("Documents saved to Ratings collection")
        }
      })
      
      //  READ
      Movie.find((err, movie) => {
        if (err) {
          console.log(err)
        } else {
          movie.forEach((movie) => {
            console.log(movie.title)
          })
        }
      })
