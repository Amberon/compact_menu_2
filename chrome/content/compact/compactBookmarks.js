var CompactBookmarks = {

init: function() {
  var bookmarks = document.getElementById('bookmarks-menu');
  var compactBookmarks = (document.getElementById('compact-bkmenubar') || {}).firstChild;
  if (!bookmarks || !compactBookmarks || compactBookmarks.initialized)
    return;

  var compactBookmarksPopup = compactBookmarks.firstChild;
  var separator = compactBookmarksPopup.firstChild;
  if ('bookmarksMenuSeparator' == separator.id) {
    var nodes = bookmarks.firstChild.childNodes;
    for (var i = 0; i < nodes.length && 'menuseparator' != nodes[i].tagName; ++i) {
      var node = nodes[i];
      var item = this.cloneNode(node);
      compactBookmarksPopup.insertBefore(item, separator);
    }
  }

  var DNDObserver = {
    get mObservers() {
      return [compactBookmarksPopup].concat(this.__proto__.mObservers);
    }
  }
  DNDObserver.__proto__ = BookmarksMenuDNDObserver;
  BookmarksMenuDNDObserver = DNDObserver;

  compactBookmarks.initialized = true;
},

cloneNode: function(node) {
  var item = document.createElement(node.tagName);
  for (var i = 0; i < node.attributes.length; ++i) {
    var attr = node.attributes[i];
    item.setAttribute(attr.name, attr.value);
  }
  return item;
},

} // CompactBookmarks

/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Compact Menu 2.
 *
 * The Initial Developer of the Original Code is Milly.
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 *   Milly
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
