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
            post {
                success {
                    echo "NPM packages installed"
                }
                failure {
                    echo "NPM install failed"
                }
            }
        }

        stage("DEV build") {
            steps {
                echo "DEV build"
                bat "ng build"
            }
            post {
                success {
                    echo "DEV build successful"
                }
                failure {
                    echo "DEV build failure"
                }
            }
        }

        stage("Lint") {
            steps {
                echo "Lint"
                bat "ng lint"
            }
            post {
                success {
                    echo "Lint passed successfully"
                }
                failure {
                    echo "Lint errors found"
                }
            }
        }

        stage("Unit test") {
            steps {
                echo "Unit test"
                bat "ng test"
            }
            post {
                success {
                    echo "Unit tests success"
                }
                failure {
                    echo "Unit tests failed"
                }
            }
        }
    }

    post {
        success {
            echo "This is called after all the stages"
        }
    }
}