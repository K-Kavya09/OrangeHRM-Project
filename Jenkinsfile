pipeline {
  agent any
 
  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
        bat 'npx.cmd playwright install'
      }
    }
 
    stage('Run Playwright tests') {
      steps {
        bat 'npx.cmd playwright test'
      }
    }
  }
}
 