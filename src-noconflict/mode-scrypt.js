ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var DocCommentHighlightRules = function () {
    this.$rules = {
        "start": [{
                token: "comment.doc.tag",
                regex: "@[\\w\\d_]+" // TODO: fix email addresses
            },
            DocCommentHighlightRules.getTagRule(),
            {
                defaultToken: "comment.doc",
                caseInsensitive: true
            }]
    };
};
oop.inherits(DocCommentHighlightRules, TextHighlightRules);
DocCommentHighlightRules.getTagRule = function (start) {
    return {
        token: "comment.doc.tag.storage.type",
        regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};
DocCommentHighlightRules.getStartRule = function (start) {
    return {
        token: "comment.doc",
        regex: "\\/\\*(?=\\*)",
        next: start
    };
};
DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token: "comment.doc",
        regex: "\\*\\/",
        next: start
    };
};
exports.DocCommentHighlightRules = DocCommentHighlightRules;

});

ace.define("ace/mode/scrypt_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(require, exports, module){/* This file was autogenerated from ./tmthemes/tmscrypt.tmLanguage (uuid: ) */
"use strict";
var oop = require("../lib/oop");
var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var scryptHighlightRules = function () {
    var keywords = ("contract|library|loop|new|private|" +
        "public|if|else|struct|type|" +
        "require|static|const|import|exit|return|asm");
    var buildinConstants = ("true|false");
    var langClasses = ("function|auto|constructor|bytes|int|bool|SigHashPreimage|PrivKey|PubKey|Sig|Ripemd160|Sha1|Sha256|" +
        "SigHashType|SigHashPreimage|OpCodeType");
    var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "constant.language": buildinConstants,
        "support.function": langClasses
    }, "identifier");
    this.$rules = {
        "start": [
            {
                token: "comment",
                regex: "\\/\\/.*$"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token: "comment",
                regex: "\\/\\*",
                next: "comment"
            }, {
                token: "string",
                regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token: "string",
                regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token: "constant.numeric",
                regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
            }, {
                token: "constant.numeric",
                regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
            }, {
                token: "constant.language.boolean",
                regex: "(?:true|false)\\b"
            },
            {
                token: ["support.function.math.scrypt", "text", "text"],
                regex: /\b(abs|min|max|within|ripemd160|sha1|sha256|hash160|hash256|checkSig|checkMultiSig|num2bin|pack|unpack|len|reverseBytes|repeat)(\s*)(\()/
            }, {
                token: [
                    "entity.name.type.scrypt",
                    "text",
                    "text",
                    "text",
                    "variable.object.property.scrypt"
                ],
                regex: /\b(SigHash)(\s*)(\.)(\s*)(ANYONECANPAY|ALL|FORKID|NONE|SINGLE)\b/
            },
            {
                token: [
                    "entity.name.type.scrypt",
                    "text",
                    "text",
                    "text",
                    "variable.object.property.scrypt"
                ],
                regex: /\b(OpCode)(\s*)(\.)(\s*)(OP_PUSHDATA1|OP_PUSHDATA2|OP_PUSHDATA4|OP_0|OP_FALSE|OP_1NEGATE|OP_1|OP_TRUE|OP_2|OP_3|OP_4|OP_5|OP_6|OP_7|OP_8|OP_9|OP_10|OP_11|OP_12|OP_13|OP_14|OP_15|OP_16|OP_1ADD|OP_1SUB|OP_NEGATE|OP_ABS|OP_NOT|OP_0NOTEQUAL|OP_ADD|OP_SUB|OP_MUL|OP_DIV|OP_MOD|OP_LSHIFT|OP_RSHIFT|OP_BOOLAND|OP_BOOLOR|OP_NUMEQUAL|OP_NUMEQUALVERIFY|OP_NUMNOTEQUAL|OP_LESSTHAN|OP_GREATERTHAN|OP_LESSTHANOREQUAL|OP_GREATERTHANOREQUAL|OP_MIN|OP_MAX|OP_WITHIN|OP_CAT|OP_SPLIT|OP_BIN2NUM|OP_NUM2BIN|OP_SIZE|OP_NOP|OP_IF|OP_NOTIF|OP_ELSE|OP_ENDIF|OP_VERIFY|OP_RETURN|OP_TOALTSTACK|OP_FROMALTSTACK|OP_IFDUP|OP_DEPTH|OP_DROP|OP_DUP|OP_NIP|OP_OVER|OP_PICK|OP_ROLL|OP_ROT|OP_SWAP|OP_TUCK|OP_2DROP|OP_2DUP|OP_3DUP|OP_2OVER|OP_2ROT|OP_2SWAP|OP_RIPEMD160|OP_SHA1|OP_SHA256|OP_HASH160|OP_HASH256|OP_CODESEPARATOR|OP_CHECKSIG|OP_CHECKSIGVERIFY|OP_CHECKMULTISIG|OP_CHECKMULTISIGVERIFY|OP_INVERT|OP_AND|OP_OR|OP_XOR|OP_EQUAL|OP_EQUALVERIFY)\b/
            }, {
                token: "entity.name.type.scrypt",
                regex: /\b(?:P2PKH|P2PK|Tx|HashPuzzleRipemd160|HashPuzzleSha1|HashPuzzleSha256|HashPuzzleHash160|OpCode|SigHash)\b/
            }, {
                token: [
                    "punctuation.separator.period.scrypt",
                    'text',
                    "entity.name.function.scrypt",
                    "text",
                    "punctuation.definition.parameters.begin.bracket.round.scrypt"
                ],
                regex: /(\.)([^\S$\r]*)([\w][\w\d]*)(\s*)(\()/,
                push: [{
                        token: "punctuation.definition.parameters.end.bracket.round.scrypt",
                        regex: /\)/,
                        next: "pop"
                    }, {
                        defaultToken: "start"
                    }]
            }, {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token: "keyword.operator",
                regex: "!|\\$|%|&|\\||\\^|\\*|\\/|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<>|<|>|!|&&|\\|\\||\\?|\\:|\\*=|\\/=|%=|\\+=|\\-=|&=|\\|=|\\^="
            }, {
                token: "lparen",
                regex: "[[({]"
            }, {
                token: "rparen",
                regex: "[\\])}]"
            }, {
                token: "text",
                regex: "\\s+"
            }
        ],
        "comment": [
            {
                token: "comment",
                regex: "\\*\\/",
                next: "start"
            }, {
                defaultToken: "comment"
            }
        ]
    };
    this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
    this.normalizeRules();
};
oop.inherits(scryptHighlightRules, TextHighlightRules);
exports.scryptHighlightRules = scryptHighlightRules;

});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module){"use strict";
var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;
var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
};
oop.inherits(FoldMode, BaseFoldMode);
(function () {
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
        return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;
            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                }
                else if (foldStyle != "all")
                    range = null;
            }
            return range;
        }
        if (foldStyle === "markbegin")
            return;
        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;
            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);
            return session.getCommentFoldRange(row, i, -1);
        }
    };
    this.getSectionRange = function (session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                }
                else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                }
                else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m)
                continue;
            if (m[1])
                depth--;
            else
                depth++;
            if (!depth)
                break;
        }
        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };
}).call(FoldMode.prototype);

});

ace.define("ace/mode/scrypt",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scrypt_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module){/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/
"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var scryptHighlightRules = require("./scrypt_highlight_rules").scryptHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;
var Mode = function () {
    this.HighlightRules = scryptHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);
(function () {
    this.lineCommentStart = "//";
    this.blockComment = { start: "/*", end: "*/" };
    this.$quotes = { '"': '"', "'": "'" };
    this.createWorker = function (session) {
        return null;
    };
    this.$id = "ace/mode/scrypt";
}).call(Mode.prototype);
exports.Mode = Mode;

});
                (function() {
                    ace.require(["ace/mode/scrypt"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            