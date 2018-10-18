/**
 * @providesModule HomeScreen
 */

import React from 'react';
import {
  Animated,
  Easing,
  Image,
  PixelRatio,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import ArticlePreview from 'ArticlePreview';
import Colors from 'Colors';
import ImageUris from 'ImageUris';
import Link from 'Link';
import NavBar from 'NavBar';

import { isIOS, isAndroid } from 'Platforms';
import { serif } from 'Fonts';

class Hero extends React.Component {
  render() {
    return (
      <View style={styles.heroContainer}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitleText}>React Native</Text>
          <Text style={styles.heroSubtitleText}>for curious people</Text>
        </View>

      </View>
    );
  }
}

export default class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Hero />

        <ScrollView style={styles.body}>
          {this._renderFunnyThing()}
          {this._renderArticleList()}
          {this._renderFooter()}
        </ScrollView>
        <StatusBar visible="true" barStyle="light-content" />
      </View>
    );
  }

  _renderFunnyThing() {
    return (
      <View style={{position: 'absolute', top: -50, left: 0, right: 0, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{color: Colors.fadedText}}>Nothing to see here! Look down below</Text>
      </View>
    );
  }

  _renderArticleList() {
    return (
      <View style={styles.articleListContainer}>
        <ArticlePreview
          id="introduction"
          navigator={this.props.navigator}
          category="Introduction"
          title="Read this first!">
            What is this? Why does this exist? Who am I?
            How did I get here? How do I work this?
            What is that large automobile?
        </ArticlePreview>

        <ArticlePreview
          id="text-input"
          navigator={this.props.navigator}
          category="Bridge"
          title="How TextInput works">
            You know that it works, you have used it. But
            how does it do it’s thing behind the scenes?
            In this article I attempt to explain that, with
            the help of some examples.
        </ArticlePreview>
      </View>
    );
  }

  _renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          That’s all for now! This is a brand new project
          and more articles will be coming soon. If
          you would like to be notified by e-mail of
          updates, sign up for the <Link url="http://reactnative.cc">React Native Newsletter</Link>
        </Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    backgroundColor: Colors.greyBackground,
    paddingTop: 20,
  },
  footerContainer: {
    marginTop: 25,
    paddingHorizontal: 30,
    marginBottom: 60,
  },
  footerText: {
    color: Colors.fadedText,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
  articleListContainer: {
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    marginBottom: 5,
  },
  heroContainer: {
    backgroundColor: Colors.brand,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 22,
    paddingBottom: 2,
  },
  heroImageContainer: {
    padding: 10,
    paddingTop: 14,
  },
  heroImage: {
    width: 73,
    height: 49,
  },
  heroTextContainer: {
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitleText: {
    color: '#fff',
    fontSize: 25,
    lineHeight: Platform.OS === 'ios' ? 26 : 30,
    fontWeight: '700',
  },
  heroSubtitleText: {
    marginTop: -4,
    color: '#fff',
    opacity: 0.8,
    fontSize: 18,
    lineHeight: Platform.OS === 'ios' ? 20 : 24,
    fontWeight: '300',
  },
});
