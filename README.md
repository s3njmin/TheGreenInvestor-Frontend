# CS203 G2-T6

# The Green Investor - A Sustainability Game (Front End Repository)

<p align="center">
    <img src="https://raw.githubusercontent.com/muhdHidir/CS203-T6/main/Poster.png" width="50%"/>
</p>

The Green Investor is a turn-based business simulation trivia game that will require you to balance your company's profitability and sustainability. This project was developed by a group of students from Singapore Management University (SMU), as part of our CS203 Collaborative Software Development Project.

As part of this years project theme, 'Climate Change', The Green Investor aims to educate potential retail investors about the opportunities and challenges of sustainable investing. To prevent further irreversible impacts on the planet, businesses must take more initiative in preventing climate change. Hence, it is crucial that companies adapt and evolve their business into a sustainable model.

Our web application can be accessed via https://www.TheGreenInvestor.net, and will be hosted online until the end of our academic term. The source code will continue being publicly available and instructions to run the web app locally is listed below.

## How To Play
 
1. You are playing as a CEO of a business, and are given 10 different scenarios and questions.
2. For each scenario or questions, you are given 4 different choices.
3. Each option will impact your business stats, which includes Sustainability Points, Morale, Cash in Hand and Income.
4. At the end of each round, there will be a post question review, where you can learn about how your choices impacted the business profitability and sustainability.
5. After progressing through 10 different scenarios and questions, your points will be calculated based on your overall stats and will be shown on the leaderboard for comparison with other players.
6. Each game you play will generate different scenarios, questions, and options, so remember to play more than once!

## Application Architecture Diagram
<p align="center">
    <img src="https://raw.githubusercontent.com/muhdHidir/CS203-T6/main/aws_darkmode_diagram.png" width="100%"/>
</p>

## Entity-Relation Diagram
<p align="center">
    <img src="https://raw.githubusercontent.com/muhdHidir/CS203-T6/main/ERDiagram-DarkMode.jpg" width="100%"/>
</p>

## Getting Started

The Green Investor Project consists of 2 parts, which can be found in the 'react-frontend' and 'G2-T6' folders.
1. The Green Investor API Server (Springboot)
2. The Green Investor Web Application (React)

The following instructions will get you a copy of the project up and running on your local machine. 

### Prerequisites

`NodeJS 16+`
`Java JDK 17+`
`Maven 3.8.6+`

### Deployment

The backend API server that was built with Spring can be executed with the following command. 

```
mvnw spring-boot:run
```

For the frontend interface built using React, it can be executed with the following command.

```
npm start
```

In the event of an error pertaining to missing 'react scripts', run the following command.

```
npm install react-scripts --save
```

The backend API will be running on port 8081, alongside the frontend on port 8080. 

## Built With

* [SpringBoot](https://spring.io/) - The Java framework used for our api architecture
* [React](https://reactjs.org/) - The framework used for our web app interface
* [Maven](https://maven.apache.org/) - Dependency Management

## Authors

* Chen Jun Hua
* Chen Kun
* Edwin Chong Tong Tong
* Muhammad Hidir Bin Abdul Rahim
* Su Liheng Benjamin
* Yogesh Adhi Narayan

