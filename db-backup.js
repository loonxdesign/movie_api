// MOVIES
db.createCollection('movies')

var movie1 = {
  Title: 'Nausicaä of the Valley of the Wind',
  Year: '1984',
  Description:
    'Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Adventure',
      Description:
        'The adventure genre consists of movies where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in their way.',
    },
    {
      Name: 'Sci-Fi',
      Description:
        'Science fiction (sometimes shortened to SF or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. Science fiction can trace its roots to ancient mythology.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: 'Nausicaaposter.jpg',
};

db.movies.insertOne(movie1);
// MOVIE1 ObjectId("6526a6c5fc1510ad0e54c535")

var movie2 = {
  Title: 'Castle in the Sky',
  Year: '1986',
  Description:
    'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Adventure',
      Description:
        'The adventure genre consists of movies where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in their way.',
    },
    {
      Name: 'Family',
      Description:
        'Family film is a genre that contains appropriate content for younger viewers. Family film aims to appeal not only to children but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humour. This genre may fall into many other genres, including comedy, adventure, fantasy, and animated film.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: 'Castle_in_the_Sky_(1986).png',
};

db.movies.insertOne(movie2);
// MOVIE2 ObjectId("6526a72efc1510ad0e54c536")

var movie3 = {
  Title: 'My Neighbor Totoro',
  Year: '1988',
  Description:
    'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Comedy',
      Description:
        'A comedy film is a category of film which emphasizes on humor. These films are designed to make the audience laugh in amusement. Films in this style traditionally have a happy ending.',
    },
    {
      Name: 'Family',
      Description:
        'Family film is a genre that contains appropriate content for younger viewers. Family film aims to appeal not only to children but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humour. This genre may fall into many other genres, including comedy, adventure, fantasy, and animated film.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: 'My_Neighbor_Totoro_-_Tonari_no_Totoro_(Movie_Poster).jpg',
};

db.movies.insertOne(movie3);
// MOVIES3 ObjectId("6526a752fc1510ad0e54c537")

var movie4 = {
  Title: "Kiki's Delivery Service",
  Year: '1989',
  Description:
    'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Fantasy',
      Description:
        'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. Fantasy films often have an element of magic, myth, wonder, escapism, and the extraordinary.',
    },
    {
      Name: 'Family',
      Description:
        'Family film is a genre that contains appropriate content for younger viewers. Family film aims to appeal not only to children but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humour. This genre may fall into many other genres, including comedy, adventure, fantasy, and animated film.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: "Kiki's_Delivery_Service_(Movie).jpg",
};

db.movies.insertOne(movie4);
// MOVIE4 ObjectId("6526a773fc1510ad0e54c538")

var movie5 = {
  Title: 'Only Yesterday',
  Year: '1991',
  Description:
    'A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Drama',
      Description:
        'Drama film is a genre that relies on the emotional and relational development of realistic characters. While Drama film relies heavily on this kind of development, dramatic themes play a large role in the plot as well. Often, these dramatic themes are taken from intense, real life issues. Whether heroes or heroines are facing a conflict from the outside or a conflict within themselves, Drama film aims to tell an honest story of human struggles.',
    },
    {
      Name: 'Romance',
      Description:
        'Romance film can be defined as a genre wherein the plot revolves around the love between two protagonists. This genre usually has a theme that explores an issue within love, including but not limited to: love at first sight, forbidden love, love triangles, and sacrificial love. The tone of Romance film can vary greatly. Whether the end is happy or tragic, Romance film aims to evoke strong emotions in the audience.',
    },
  ],
  Director: {
    Name: 'Isao Takahata',
    Bio: 'Isao Takahata was a Japanese director, screenwriter and producer. A co-founder of Studio Ghibli, he earned international critical acclaim for his work as a director of Japanese animated feature films.',
    Birth: '1935',
    Death: '2018',
  },
  ImagePath: 'OYpost.jpg',
};

db.movies.insertOne(movie5);
// MOVIE5 ObjectId("6526a7bafc1510ad0e54c539")

var movie6 = {
  Title: 'Porco Rosso',
  Year: '1992',
  Description:
    'In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Adventure',
      Description:
        'The adventure genre consists of movies where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in their way.',
    },
    {
      Name: 'Comedy',
      Description:
        'A comedy film is a category of film which emphasizes on humor. These films are designed to make the audience laugh in amusement. Films in this style traditionally have a happy ending.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki ',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: 'Porco_Rosso_(Movie_Poster).jpg',
};

db.movies.insertOne(movie6);
// MOVIE6 ObjectId("6526a7ccfc1510ad0e54c53a")

var movie7 = {
  Title: 'Whisper of the Heart',
  Year: '1995',
  Description:
    'A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Drama',
      Description:
        'Drama film is a genre that relies on the emotional and relational development of realistic characters. While Drama film relies heavily on this kind of development, dramatic themes play a large role in the plot as well. Often, these dramatic themes are taken from intense, real life issues. Whether heroes or heroines are facing a conflict from the outside or a conflict within themselves, Drama film aims to tell an honest story of human struggles.',
    },
    {
      Name: 'Family',
      Description:
        'Family film is a genre that contains appropriate content for younger viewers. Family film aims to appeal not only to children but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humour. This genre may fall into many other genres, including comedy, adventure, fantasy, and animated film.',
    },
  ],
  Director: {
    Name: 'Yoshifumi Kondō',
    Bio: 'Yoshifumi Kondō was a Japanese animator who worked for Studio Ghibli in his last years.',
    Birth: '1950',
    Death: '1998',
  },
  ImagePath: 'Whisper_of_the_Heart_(Movie_Poster).jpg',
};

db.movies.insertOne(movie7);
// MOVIE7 ObjectId("6526a7f4fc1510ad0e54c53b")

var movie8 = {
  Title: 'Princess Mononoke',
  Year: '1997',
  Description:
    "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a indestructible villain, or a pursuit which usually concludes in victory for the hero.',
    },
    {
      Name: 'Adventure',
      Description:
        'The adventure genre consists of movies where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in their way.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki ',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: 'Princess_Mononoke_Japanese_poster.png',
};

db.movies.insertOne(movie8);
// MOVIE8 ObjectId("6526a80bfc1510ad0e54c53c")

var movie9 = {
  Title: 'Spirited Away',
  Year: '2001',
  Description:
    "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Adventure',
      Description:
        'The adventure genre consists of movies where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in their way.',
    },
    {
      Name: 'Family',
      Description:
        'Family film is a genre that contains appropriate content for younger viewers. Family film aims to appeal not only to children but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humour. This genre may fall into many other genres, including comedy, adventure, fantasy, and animated film.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki ',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: '',
};

db.movies.insertOne(movie9);
// MOVIE9 ObjectId("6526a82dfc1510ad0e54c53d")

var movie10 = {
  Title: "Howl's Moving Castle",
  Year: '2004',
  Description:
    'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Adventure',
      Description:
        'The adventure genre consists of movies where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in their way.',
    },
    {
      Name: 'Family',
      Description:
        'Family film is a genre that contains appropriate content for younger viewers. Family film aims to appeal not only to children but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humour. This genre may fall into many other genres, including comedy, adventure, fantasy, and animated film.',
    },
  ],
  Director: {
    Name: 'Hayao Miyazaki ',
    Bio: 'Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
    Birth: '1941',
  },
  ImagePath: 'Howls-moving-castleposter.jpg',
};

db.movies.insertOne(movie10);
// MOVIE10 ObjectId("6526a847fc1510ad0e54c53e")

var movie11 = {
  Title: 'From Up on Poppy Hill',
  Year: '2011',
  Description:
    "A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.",
  Genres: [
    {
      Name: 'Animation',
      Description:
        'Animation is the method that encompasses myriad filmmaking techniques, by which still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets (cels) to be photographed and exhibited on film.',
    },
    {
      Name: 'Comedy',
      Description:
        'A comedy film is a category of film which emphasizes on humor. These films are designed to make the audience laugh in amusement. Films in this style traditionally have a happy ending.',
    },
    {
      Name: 'Drama',
      Description:
        'Drama film is a genre that relies on the emotional and relational development of realistic characters. While Drama film relies heavily on this kind of development, dramatic themes play a large role in the plot as well. Often, these dramatic themes are taken from intense, real life issues. Whether heroes or heroines are facing a conflict from the outside or a conflict within themselves, Drama film aims to tell an honest story of human struggles.',
    },
  ],
  Director: {
    Name: 'Gorō Miyazaki',
    Bio: 'Goro Miyazaki is a Japanese director. He is the son of animator and film director Hayao Miyazaki, who is one of the co-founders of Studio Ghibli. Described as "reluctant" to follow his father\'s career, Goro initially worked as a landscaper for many years before entering the film business.',
    Birth: '1967',
  },
  ImagePath: 'From_Up_on_Poppy_Hill.png',
};

db.movies.insertOne(movie11);
// MOVIE11 ObjectId("6526a85ffc1510ad0e54c53f")

// USERS
db.createCollection('users');

var user1 = {
  Username: 'Honeymoon23',
  Password: 'ToTheMoonAndBack',
  Email: 't.hannah.marleen@freenet.de',
  Birthday: new Date('1992-04-06'),
};
db.users.insertOne(user1);

db.users.updateOne(
    {_id: ObjectId("6526aae9fc1510ad0e54c540")},
    {$set: {FavoriteMovies: [ObjectId("6526a85ffc1510ad0e54c53f"), ObjectId("6526a752fc1510ad0e54c537")]}}
)
// USER1 ObjectId("6526aae9fc1510ad0e54c540")



var user2 = {
  Username: 'loonxdesign',
  Password: 'IAmADesigner123',
  Email: 'hi@loon-design.de',
  Birthday: new Date('1990-05-23'),
};
db.users.insertOne(user2);

db.users.updateOne(
    {_id: ObjectId("6526ab3cfc1510ad0e54c541")},
    {$set: {FavoriteMovies: [ObjectId("6526a6c5fc1510ad0e54c535"), ObjectId("6526a752fc1510ad0e54c537"), ObjectId("6526a82dfc1510ad0e54c53d")]}}
)
// USER2 ObjectId("6526ab3cfc1510ad0e54c541")



var user3 = {
  Username: 'JamesBond',
  Password: 'ShakenNotStirred',
  Email: 'jamesbond@agent007.com',
  Birthday: new Date('1953-04-13'),
};
db.users.insertOne(user3);

db.users.updateOne(
    {_id: ObjectId("6526ab64fc1510ad0e54c542")},
    {$set: {FavoriteMovies: [ObjectId("6526a847fc1510ad0e54c53e"), ObjectId("6526a7bafc1510ad0e54c539")]}}
)
// USER3 ObjectId("6526ab64fc1510ad0e54c542")




var user4 = {
  Username: 'Frodo123',
  Password: 'WhereIsTheRing',
  Email: 'frodobeutlin@lordoftherings.com',
  Birthday: new Date('1978-09-22'),
};
db.users.insertOne(user4);

db.users.updateOne(
    {_id: ObjectId("6526ab7efc1510ad0e54c543")},
    {$set: {FavoriteMovies: [ObjectId("6526a82dfc1510ad0e54c53d"), ObjectId("6526a7bafc1510ad0e54c539"), ObjectId("6526a7f4fc1510ad0e54c53b"), ObjectId("6526a80bfc1510ad0e54c53c")]}}
)
// USER4 ObjectId("6526ab7efc1510ad0e54c543")



var user5 = {
  Username: 'Hauru-Jenkinsu-Pendoragon',
  Password: 'UStoleMyHeart777',
  Email: 'hauru@howlscastle.com',
  Birthday: new Date('1991-02-05'),
};
db.users.insertOne(user5);

db.users.updateOne(
    {_id: ObjectId("6526ab94fc1510ad0e54c544")},
    {$set: {FavoriteMovies: [ObjectId("6526a6c5fc1510ad0e54c535"), ObjectId("6526a752fc1510ad0e54c537"), ObjectId("6526a85ffc1510ad0e54c53f")]}}
)
// USER5 ObjectId("6526ab94fc1510ad0e54c544")


Bio: 'Hayao Miyazak is a Japanese manga artist and prominent film director and animator of many popular anime feature films. Through a career that has spanned nearly five decades, Miyazaki has attained international acclaim as a maker of animated feature films and, along with Isao Takahata, co-founded Studio Ghibli, an animation studio and production company. The success of Miyazaki\'s films has invited comparisons with American animator Walt Disney, British animator Nick Park as well as Robert Zemeckis, who pioneered Motion Capture animation, and he has been named one of the most influential people by Time Magazine.

mongoexport -d test -c movies -o movies.json

mongoexport -d test -c users -o users.json