pipeline {
    agent {label "windows"}
    
    stages {
        stage("DEV build") {
            echo "DEV build"
            bat "ng build"
        }
        stage("Lint") {
            echo "Lint"
            bat "ng lint"
        }
        stage("Unit test") {
            echo "Unit test"
            bat "ng test"
        }
    }
}