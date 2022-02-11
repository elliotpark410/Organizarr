const path = require('path');
const express = require('express');
const session = require('express-session');
const seqSession = require('express-session-sequelize');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');