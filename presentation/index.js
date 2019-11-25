// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Link,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from '../themes/custom';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

const code = {
  depOldShool: require('!raw-loader!../assets/code/dep-old-school.example'),
  depModernNpm: require('!raw-loader!../assets/code/dep-modern-npm.example'),
  depModernAppjs: require('!raw-loader!../assets/code/dep-modern-appjs.example'),
  depModernMycarouseljs: require('!raw-loader!../assets/code/dep-modern-mycarouseljs.example'),
  depModernIndex: require('!raw-loader!../assets/code/dep-modern-indexhtml.example'),
  webpackRunCompile: require('!raw-loader!../assets/code/webpack-run-compile.example'),
  webpackRunDevserver: require('!raw-loader!../assets/code/webpack-run-devserver.example'),
  webpackEntryApp: require('!raw-loader!../assets/code/webpack-entry-app.example'),
  webpackEntryConfig: require('!raw-loader!../assets/code/webpack-entry-config.example'),
  webpackPluginConfig: require('!raw-loader!../assets/code/webpack-plugin-config.example'),
  webpackModeConfig: require('!raw-loader!../assets/code/webpack-mode-config.example'),
  babelBrowserlist: require('!raw-loader!../assets/code/babel-browserlist.example'),
  babelConfig: require('!raw-loader!../assets/code/babel-config.example'),
  webpackIncludeHtml: require('!raw-loader!../assets/code/webpack-include-html.example'),
  webpackIncludeLoader: require('!raw-loader!../assets/code/webpack-include-loader.example'),
  webpackIncludePlugin: require('!raw-loader!../assets/code/webpack-include-plugin.example')
};

// Require CSS
require('normalize.css');

// Spectacle default theme
const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >

        <Slide transition={['zoom']}>
          <Heading size={1} fit caps>
            Frontend<br />
            Build Tools
          </Heading>
          <Text margin="10px 0 0" bold textColor="secondary">
            (-> Webpack :)
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Once apon a time...
          </Heading>
          <Text textColor="secondary">
            Quando JavaScript non era così popolare:
          </Text>
          <List textColor="secondary">
            <ListItem>logiche FE meno complesse</ListItem>
            <ListItem>meno attenzione alle performance</ListItem>
            <ListItem>non si usavano preprocessor css</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Perchè abbiamo bisogno di Build Tools?
          </Heading>
          <Text textColor="secondary">
            <strong>Per automatizzare!</strong>
          </Text>
          <List textColor="secondary">            
            <ListItem>Minification</ListItem>
            <ListItem>CSS auto-prefixing and preprocessing</ListItem>
            <ListItem>Image optimization</ListItem>
            <ListItem>Launching tests</ListItem>
            <ListItem>Development web server</ListItem>
            &
            <ListItem>Bundling di JS, CSS, Icone</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            What is Bundling!?
          </Heading>
          <Text textColor="secondary">
            Long story short:
          </Text>
          <BlockQuote>
            <Quote textColor="secondary" textSize="2.6rem" textAlign="center">
              "to puts your code<br />
              and all its dependencies<br />
              together, in one file"
            </Quote>
            <Cite margin="1em 0 0 2em" textAlign="right">Somebody</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Task runner o<br /> 
            Bundle Manager?
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            La differenza è sempre più sottile.
          </Text>
          <List textColor="secondary">            
            <ListItem><b>Bundle manager</b> - si focalizzano sulla risoluzione delle dipendenze e sulla creazione di bundle</ListItem>
            <ListItem><b>Task runner</b> - sono più generici.<br/> Uno dei task può essere il bundling delle risorse.</ListItem>
          </List>          
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Task runner o<br />
            Bundle Manager?
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Esempi:
          </Text>
          <List textColor="secondary">
            <ListItem><strong>Bundle manager</strong> - Webpack, Browserify, Parcel, Rollup</ListItem>
            <ListItem><strong>Task runner</strong> - Grunt, Gulp, ...</ListItem>
          </List>
          <Text textColor="secondary" margin="4rem 0 0 0">
            Webpack nasce come bundle manager, <br/ >
            ma in qualche modo è anche un task runner.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Dependencies:<br />
            The old school way
          </Heading>
          <CodePane
            textSize="1em"
            lang="html"
            source={code.depOldShool}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Dependencies:<br />
            The old school way
          </Heading>
          <Text textColor="secondary" margin="0 0 0.7em">
            <strong>Pros:</strong><br /> semplice
          </Text>
          <Text textColor="secondary">
            <strong>Cons:</strong>
          </Text>
          <List textColor="secondary">
            <ListItem>Dipendenze non esplicitate</ListItem>
            <ListItem>Bundling manuale!</ListItem>
            <ListItem>No code analysis / optimization</ListItem>
            <ListItem>Global space pollution</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Dependencies:<br />
            Modern approaches
          </Heading>
          <CodePane
            textSize="1em"
            lang="html"
            source={code.depModernNpm}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            textSize="1em"
            lang="js"
            source={code.depModernAppjs}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            textSize="1em"
            lang="js"
            source={code.depModernMycarouseljs}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            textSize="1em"
            lang="html"
            source={code.depModernIndex}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Dependencies:<br />
            The old school way
          </Heading>
          <Text textColor="secondary" margin="0 0 0.7em">
            <strong>Pros:</strong>
          </Text>
          <List textColor="secondary">
            <ListItem>dipendenze esplicite</ListItem>
            <ListItem>processing degli assets più potente</ListItem>            
            <ListItem>dead code elimination</ListItem>
            <ListItem>code splitting</ListItem>
          </List>
          <Text textColor="secondary">
            <strong>Cons:</strong><br />
            più complesso
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            "Static module bundler<br />
            for modern Javascript applications"
          </Text>          
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack
          </Heading>
          <Text textColor="secondary" margin="0 0 0.7em">
            And much more:
          </Text>
          <List textColor="secondary">
            <ListItem>Internamente costruisce un <strong>dependency graph</strong></ListItem>
            <ListItem>Ottimizzazione dei bundle</ListItem>
            <ListItem>Code splitting</ListItem>
            <ListItem><strong>Dev Server</strong> con Hot Module Replacement</ListItem>
            <ListItem>HTML partials</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br /> Module dependencies
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Supporta varie sintassi per la definizione delle dipendenze:
          </Text>
          <List textColor="secondary">
            <ListItem><strong>ES2015 import</strong> :)</ListItem>
            <ListItem>CommonJS require()</ListItem>
            <ListItem>JS AMD define / require</ListItem>
            <ListItem>css/sass/less @import  </ListItem>
            <ListItem>image url in a stylesheet url(...) or img tag</ListItem>
            <ListItem>require di frammenti di html</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br /> Come lanciarlo
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Solo compilazione:
          </Text>
          <CodePane
            textSize="1em"
            lang="html"
            source={code.webpackRunCompile}
            margin="20px auto"
            overflow="overflow"
          />
          <Text textColor="secondary" margin="1.2em 0 1.2em">
            Con development server:
          </Text>
          <CodePane
            textSize="1em"
            lang="html"
            source={code.webpackRunDevserver}
            margin="20px auto"
            overflow="overflow"
          />          
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Concepts
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">            
            Configuration based (perlopiù):<br />
            "webpack.config.js"<br />
            <br />
            Concetti:
          </Text>
          <List textColor="secondary">            
            <ListItem>Entry</ListItem>
            <ListItem>Output</ListItem>
            <ListItem>Loaders</ListItem>
            <ListItem>Plugin</ListItem>            
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Entry point
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">            
            Gli entry point indicano a webpack<br />
            <strong>da quali moduli deve partire</strong><br />
            per costruirsi il dependency graph.
          </Text>
        </Slide>
                  
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Loaders
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Di base webpack gestisce solo Javascript.<br />
            <br />
            I loader permettono di processare<br />
            e <strong>creare bundle per altri tipi di file</strong>.
          </Text>
          <CodePane
            textSize="0.6em"
            lang="js"
            source={code.webpackEntryApp}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            textSize="0.6em"
            lang="js"
            source={code.webpackEntryConfig}
            margin="20px auto"
            overflow="overflow"
          /> 
        </Slide>            

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Plugins
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">            
            Mentre i Loader permettono di<br />
            trasformare certi tipi di file,<br />
            <br />
            i Plugin permettono<br />
            <strong>operazioni più complesse</strong>:<br />            
          </Text>
          <List textColor="secondary">            
            <ListItem>bundle optimization</ListItem>
            <ListItem>inject dei bundle nel markup</ListItem>
            <ListItem>generazione di sprite svg</ListItem>
            <ListItem>analisi del codice e generazione di report</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Plugins
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Esempio:<br />
            <strong>html-webpack-plugin</strong><br />
            processa un singolo file HTML<br />
            iniettandovi tutti i bundle generati.
          </Text>
          <CodePane
            textSize="0.8em"
            lang="js"
            source={code.webpackPluginConfig}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Mode
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Indica a web pack quale preset di ottimizzazioni applicare:
          </Text>
          <List textColor="secondary">            
            <ListItem><strong>'development'</strong>: più info per il debug e lo sviluppo, più veloce</ListItem>
            <ListItem><strong>'production'</strong>: più ottimizzato, ma più lento</ListItem>
          </List>
          <CodePane
            textSize="0.8em"
            lang="js"
            source={code.webpackModeConfig}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Extend<br /> 
            Browser Compatibility
          </Heading>
          <List textColor="secondary">
            <ListItem textSize="1em"><strong>@babel</strong>/preset-env: <strong>transpile dei "syntactic sugar" ES6</strong> e successivi (es: arrow function, spread operator, default params, cons/let)</ListItem>
            <ListItem textSize="1em"><strong>core-js</strong>: <strong>polyfill</strong> per estendere supporto di <strong>funzioni e metodi</strong> (es: Array.find(), new Promise() )</ListItem>
          </List>
          <Text textColor="secondary" textSize="1em" margin="0 0 1.2em">
            Il preset '@babel/preset-env' contiene tante micro configurazioni senza doversi occupare di troppi dettagli.<br />            
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Extend<br /> 
            Browser Compatibility
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Babel va a leggere <strong>"browserlist"</strong> dal package.json per sapere<br />
            <strong>quali browser deve supportare</strong>:
          </Text>
          <CodePane
            textSize="0.8em"
            lang="js"
            source={code.babelBrowserlist}
            margin="20px auto"
            overflow="overflow"
          />
          <Link textSize="0.5em" textColor="secondary" href="https://browserl.ist/?q=%3E+0.25%25%2C+not+dead" target="_blank">
          Esempio: https://browserl.ist/?q=%3E+0.25%25%2C+not+dead
          </Link>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack: Extend<br />
            Browser Compatibility
          </Heading>
          <CodePane
            textSize="0.6em"
            lang="js"
            source={code.babelConfig}
            margin="20px auto"
            overflow="overflow"
          />
          <Link textSize="0.5em" textColor="secondary" href="https://babeljs.io/docs/en/babel-preset-env#how-does-it-work" target="_blank">
            Approfondimento: https://babeljs.io/docs/en/babel-preset-env#how-does-it-work
          </Link>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            HTML includes
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            <strong>HTML dependencies</strong> tramite sintassi <strong>require</strong>.
          </Text>
          <CodePane
            textSize="0.6em"
            lang="js"
            source={code.webpackIncludeHtml}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            HTML includes
          </Heading>          
          <Text textColor="secondary" margin="0 0 1.2em">
            Html loader: processa gli html<br />
            (risolvendo le dipendenze)
          </Text>
          <CodePane
            textSize="0.6em"
            lang="js"
            source={code.webpackIncludeLoader}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            HTML includes
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Aspè, ma l'<strong>entry point</strong>?!            
          </Text>
          <Text textColor="secondary" margin="0 0 1.2em">
            Creo un'istanza di <strong>HTMLWebpackPlugin</strong><br />
            per ogni file .html di pagina.
          </Text>
          <Text textColor="secondary" margin="0 0 1.2em">
            Inoltre:
          </Text>
          <List textColor="secondary">
            <ListItem>inietta i bundles nel tag head (css, js, etc)</ListItem>
            <ListItem>inietta i meta viewport</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            HTML includes
          </Heading>
          <CodePane
            textSize="0.6em"
            lang="js"
            source={code.webpackIncludePlugin}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            Code splitting
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">            
            Per migliorare i <strong>tempi di caricamento</strong> possiamo <strong>creare più bundle</strong>,
            che possono essere caricati in parallelo o in modalità lazy.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            Code splitting
          </Heading>
          <Text textColor="secondary" margin="0 0 1.2em">
            Tre metodi principali (non esclusivi):
          </Text>
          <List textColor="secondary">
            <ListItem textSize="1em"><strong>Multiple Entry Points</strong>, uno per ogni bundle</ListItem>
            <ListItem textSize="1em"><strong>Prevent Duplication: SplitChunksPlugin</strong> ottimizza ulteriormente estraendo le dipendenze comuni</ListItem>
            <ListItem textSize="1em">
              <strong>Dynamic Imports</strong>: import() asincrono di dipendenze,<br />
              causa la creazione di bundle separati,<br />
              caricabili in modalità lazy.
            </ListItem>
          </List>
          <Link textSize="0.5em" textColor="secondary" href="https://webpack.js.org/guides/code-splitting/" target="_blank">
            Approfondimento: https://webpack.js.org/guides/code-splitting/
          </Link>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Webpack:<br />
            Difficoltà incontrate
          </Heading>
          <List textColor="secondary">
            <ListItem>setup iniziale dispendioso</ListItem>
            <ListItem>percorsi relativi/assoluti</ListItem>
            <ListItem>è configuration-based, quindi non basta leggere il codice; bisogna conoscere le varie opzioni</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="0 0 0.7em" textColor="tertiary">
            Domande?
          </Heading>
          <Text textColor="secondary" margin="5em 0 0" textSize="1.5rem">
            <strong>Relatore:</strong><br />
            Marcello Cosentino<br />
            Frontend Engineer<br />
            @ 2mlab - Tecla - Lutech Group<br />
            <br />
            Presentazione realizzata con:<br />
            <strong>Spectacle</strong><br />
            <br />
            <strong>Repository:</strong><br />
            https://github.com/cosentino/fe-build-tools-presentation
          </Text>
        </Slide>

      </Deck>
    );
  }
}
