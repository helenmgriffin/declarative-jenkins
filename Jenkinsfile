def awsCredentials = [[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'AWSCredentials']]

pipeline {
  agent {
    dockerfile true
  }

  environment {
    HELLO_WORLD = "Hello world!"
    AWS_REGION = 'eu-west-1'
    HOME = '.'
  }

  options {
    disableConcurrentBuilds()
    parallelsAlwaysFailFast()
    timestamps()
    withCredentials(awsCredentials)
  }

  stages {
    stage('Build & Say Hello World') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }

        stage('Say Hello World') {
          steps {
            echo "${env.HELLO_WORLD}"
          }
        }
        stage('Echo AWS Region') {
          steps {
            echo "${env.AWS_REGION}"
          }
        }
    }

    stage('Deploy') {
      steps {
        sh 'cdk deploy --require-approval=never'
      }
    }

    stage('Destroy') {
      steps {
        sh 'cdk destroy --require-approval=never'
      }
    }

    stage('Trigger PROD Build') {
      when {
        branch 'master'
      }

      steps {
        build job: '/declarative-jenkins-PROD', wait: false
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
