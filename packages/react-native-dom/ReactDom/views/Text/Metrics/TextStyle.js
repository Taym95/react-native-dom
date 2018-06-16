// @flow

import { deepCopyProperties } from "./deepCopyProperties";

type TextStyleObj = {
  breakWords: boolean,
  fontFamily: string,
  fontSize: number,
  fontStyle: string,
  fontVariant: string,
  fontWeight: string,
  lineHeight: number,
  letterSpacing: number,
  whiteSpace: string,
  wordWrap: boolean,
  wordWrapWidth: number
};

export class TextStyle {
  static DefaultTextStyle: TextStyleObj;

  styleID: number;

  constructor(style: TextStyleObj) {
    this.styleID = 0;

    this.reset();

    deepCopyProperties(this, style, style);
  }

  reset() {
    deepCopyProperties(
      this,
      TextStyle.DefaultTextStyle,
      TextStyle.DefaultTextStyle
    );
  }

  _breakWords: boolean;

  get breakWords() {
    return this._breakWords;
  }

  set breakWords(breakWords: boolean) {
    if (this._breakWords !== breakWords) {
      this._breakWords = breakWords;
      this.styleID++;
    }
  }

  _fontFamily: string;

  get fontFamily() {
    return this._fontFamily;
  }

  set fontFamily(fontFamily: string) {
    if (this._fontFamily !== fontFamily) {
      this._fontFamily = fontFamily;
      this.styleID++;
    }
  }

  _fontSize: number;

  get fontSize() {
    return this._fontSize;
  }

  set fontSize(fontSize: number) {
    if (this._fontSize !== fontSize) {
      this._fontSize = fontSize;
      this.styleID++;
    }
  }

  _fontStyle: string;

  get fontStyle() {
    return this._fontStyle;
  }

  set fontStyle(fontStyle: string) {
    if (this._fontStyle !== fontStyle) {
      this._fontStyle = fontStyle;
      this.styleID++;
    }
  }

  _fontVariant: string;

  get fontVariant() {
    return this._fontVariant;
  }

  set fontVariant(fontVariant: string) {
    if (this._fontVariant !== fontVariant) {
      this._fontVariant = fontVariant;
      this.styleID++;
    }
  }

  _fontWeight: string;

  get fontWeight() {
    return this._fontWeight;
  }

  set fontWeight(fontWeight: string) {
    if (this._fontWeight !== fontWeight) {
      this._fontWeight = fontWeight;
      this.styleID++;
    }
  }

  _letterSpacing: number;

  get letterSpacing() {
    return this._letterSpacing;
  }

  set letterSpacing(letterSpacing: number) {
    if (this._letterSpacing !== letterSpacing) {
      this._letterSpacing = letterSpacing;
      this.styleID++;
    }
  }

  _lineHeight: number;

  get lineHeight() {
    return this._lineHeight;
  }

  set lineHeight(lineHeight: number) {
    if (this._lineHeight !== lineHeight) {
      this._lineHeight = lineHeight;
    }
  }

  _whiteSpace: string;

  get whiteSpace() {
    return this._whiteSpace;
  }

  set whiteSpace(whiteSpace: string) {
    if (this._whiteSpace !== whiteSpace) {
      this._whiteSpace = whiteSpace;
      this.styleID++;
    }
  }

  _wordWrap: boolean;

  get wordWrap() {
    return this._wordWrap;
  }

  set wordWrap(wordWrap: boolean) {
    if (this._wordWrap !== wordWrap) {
      this._wordWrap = wordWrap;
      this.styleID++;
    }
  }

  _wordWrapWidth: number;

  get wordWrapWidth() {
    return this._wordWrapWidth;
  }

  set wordWrapWidth(wordWrapWidth: number) {
    if (this._wordWrapWidth !== wordWrapWidth) {
      this._wordWrapWidth = wordWrapWidth;
      this.styleID++;
    }
  }

  toFontString() {
    const fontSizeString = `${this.fontSize}px`;

    // Clean-up fontFamily property by quoting each font name
    // this will support font names with spaces
    let fontFamilies = this.fontFamily.split(",");

    for (let i = fontFamilies.length - 1; i >= 0; i--) {
      // Trim any extra whitespace
      let fontFamily = fontFamilies[i].trim();

      // Check if font already contains strings
      if (!/([\"\'])[^\'\"]+\1/.test(fontFamily)) {
        fontFamily = `"${fontFamily}"`;
      }
      fontFamilies[i] = fontFamily;
    }

    return `${this.fontStyle} ${this.fontVariant} ${
      this.fontWeight
    } ${fontSizeString} ${fontFamilies.join(",")}`;
  }
}