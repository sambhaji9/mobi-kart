pipeline {
    agent {
        label "master"
    }
    
    stages {

        stage ("Install") {
            steps {
                echo "npm install"
                bat "npm install"
            }
        }

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