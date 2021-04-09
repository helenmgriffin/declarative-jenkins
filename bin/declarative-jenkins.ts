#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import DeclarativeJenkinsStack from '../lib/declarative-jenkins-stack';

const app = new App();
new DeclarativeJenkinsStack(app, 'DeclarativeJenkinsStack');
