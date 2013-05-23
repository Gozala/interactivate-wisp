# Interactivate wisp

This is an interactive [wisp][] programing environment based of
[interactivate][] plugin, for [codemirror][] editor component.
It let's you type wisp code and observe compilation & evaluation
results live.


Try: http://jeditoolkit.com/interactivate-wisp

# Hack

This demo is tool is written in wisp and browser bundles are
generated using [browserify][]. If you wanna make changes,
you'll have to install dependencies:

    npm install


Once you make changes you need to make build. You could run command
below to let it take care of recompling every time you save a changes.

    npm start

[wisp]:https://github.com/Gozala/wisp
[interactivate]:https://github.com/Gozala/interactivate
[codemirror]:http://codemirror.net/ "In-browser code editing made bearable"
[browserify]:http://browserify.org/