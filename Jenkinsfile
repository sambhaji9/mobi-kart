pipeline {
    agent {label "windows"}
    
    stages {
        stage("DEV build") {
            steps {
                echo "DEV build"
                bat "ng build"
            }
        }
        stage("Lint") {
            steps {
                echo "Lint"
                bat "ng lint"
            }
        }
        stage("Unit test") {
            steps {
                echo "Unit test"
                bat "ng test"
            }
        }
    }
}