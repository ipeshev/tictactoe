# tictactoe
Simple TicTacToe browser game, to run the game you need to set some http server either via VirtualHost either via Location

Here is sample apache VirtualHost setting

```conf
<VirtualHost *:80 >
    ServerName tictactoe.bg
    DocumentRoot "$pathToProjectFolder"
    <Directory "$pathToProjectFolder" >
                 Options Indexes FollowSymLinks
                 AllowOverride ALL
                 DirectoryIndex index.html
                 Require all granted
     </Directory>
    ErrorLog "$pathToErrorLogFile"
    CustomLog "$pathToLogFile" common
</VirtualHost>
```
replace all $something with real paths in your OS

set following entry in the hosts file

127.0.0.1 tictactoe.bg

the game should run after restart of the apache

The will not run if index.html is opened directly via browser ( right button - open with Chrome ),
since it requires to make http request in order to transform JSX files

## To run the tests
go into tools folder and run

```sh
npm install

npm install karma-cli -g
```

this installs needed packages

the run

```sh
karma start karma.conf.js
```
this runs the tests

For now don't have tests on React components since,
this is my first React app and I need some time to figure way out how to make it properly

Contact me directly for any questions.

ivan.g.peshev@gmail.com