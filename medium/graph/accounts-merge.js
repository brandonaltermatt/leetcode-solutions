/* https://leetcode.com/problems/accounts-merge/
Given a list of accounts where each element accounts[i] is a list of strings,
where the first element accounts[i][0] is a name, and the rest of the elements
are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person
if there is some common email to both accounts. Note that even if two accounts have the same name,
they may belong to different people as people could have the same name. A person can have any number
of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format:
the first element of each account is the name, and the rest of the elements
are emails in sorted order. The accounts themselves can be returned in any order.
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  const emailOwner = {};
  const parents = {};

  /** Travel up the list of parents for an email until we find the root parent */
  const findRootParent = (email) => {
    if (parents[email] !== email) parents[email] = findRootParent(parents[email]);

    return parents[email];
  };

  /** Union the groups by assigning the root parent of email 2
   * to be a child of the root parent of email 1 */
  const unionGroup = (email1, email2) => {
    parents[findRootParent(email1)] = findRootParent(email2);
  };

  accounts.forEach(([name, ...emails]) => {
    emails.forEach((email) => {
      // Set a parent for the email if none exists
      if (!parents[email]) parents[email] = email;

      emailOwner[email] = name;
      // Group emails from the same account together by assigning the same root parent
      unionGroup(email, emails[0]);
    });
  });

  const emailGroups = {};
  Object.keys(parents).forEach((parent) => {
    const rootParent = findRootParent(parent);
    if (emailGroups[rootParent]) {
      emailGroups[rootParent].push(parent);
    } else {
      emailGroups[rootParent] = [parent];
    }
  });

  return Object.entries(emailGroups)
    .map(([parent, children]) => [emailOwner[parent], ...children.sort()]);
};
