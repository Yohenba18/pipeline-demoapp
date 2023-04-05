pipeline {
  agent {linux}
  stages {
    stage('Build') {
      steps {
        echo 'Build demo application'
        sh '''echo "build shell reply"
'''
      }
    }

    stage('Linux tests') {
      parallel {
        stage('Linux tests') {
          steps {
            echo 'Run linux tests'
            sh '''echo "reply linux test"
'''
          }
        }

        stage('Window tests') {
          steps {
            echo 'Rn window tests'
          }
        }

      }
    }

    stage('Deploy Staging') {
      steps {
        echo 'deploy to staging environment'
        input 'Ok to deploy to product'
      }
    }

    stage('Deploy Production') {
      steps {
        echo 'Deploy to prod'
      }
    }

  }

}
