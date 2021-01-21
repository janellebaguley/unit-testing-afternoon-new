import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
  });
test('should remove extra characters after 100 and replace with 3 periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});
test('should correctly count number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
});
test('should correctly attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName')
});
test('should remove posts with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
  });