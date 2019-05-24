pipeline {
  agent { label 'linux' }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    DEV_HOST = 'jenkins@node-01.do-ams3.proxy.misc.statusim.net'
    DEV_OPTS = '-e "ssh -o StrictHostKeyChecking=no"'
    DEV_SITE = 'dev-translate'
    GH_USER = 'status-im-auto'
    GH_MAIL = 'auto@status.im'
    GH_REPO = 'translate.status.im'
  }

  stages {
    stage('Git Prep') {
      steps {
        sh "git config user.name ${GH_USER}"
        sh "git config user.email ${GH_MAIL}"
      }
    }

    stage('Install Deps') {
      steps {
        sh 'yarn install'
        sh 'yarn upgrade'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn run clean'
        sh 'yarn run build'
      }
    }

    stage('Robot') {
      when { expression { !GIT_BRANCH.endsWith('master') } }
      steps { script {
        sh 'echo "Disallow: /" >> public/robots.txt'
      } }
    }

    stage('Publish Prod') {
      when { expression { GIT_BRANCH.endsWith('master') } }
      steps { script {
        withCredentials([string(
          credentialsId: 'jenkins-github-token',
          variable: 'GH_TOKEN',
        )]) {
          sh 'yarn run deploy:ci'
        }
      } }
    }

    stage('Publish Devel') {
      when { expression { !GIT_BRANCH.endsWith('master') } }
      steps { script {
        sshagent(credentials: ['jenkins-ssh']) {
          sh "rsync ${DEV_OPTS} -r --delete build/. ${DEV_HOST}:/var/www/${DEV_SITE}/"
        }
      } }
    }
  }
}
