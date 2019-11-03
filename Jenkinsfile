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
                bat "npm run build"
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
                bat "npm run lint"
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
                bat "npm run test"
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

        stage("SonarQube analysis") {
            steps {
                echo "Sonar Qube analysis"
                bat "npm run sonar"
            }
            post {
                success {
                    echo "Sonarqube analysis success"
                }
                failure {
                    echo "Sonarqube analysis failure"
                }
            }
        }
    }
}