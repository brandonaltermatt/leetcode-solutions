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

  const find = (x) => {
    if (parents[x] !== x) parents[x] = find(parents[x]);

    return parents[x];
  };

  const union = (x, y) => {
    parents[find(x)] = find(y);
  };

  accounts.forEach(([name, ...emails]) => {
    emails.forEach((email) => {
      if (!parents[email]) parents[email] = email;

      emailOwner[email] = name;
      union(email, emails[0]);
    });
  });

  const emails = {};
  Object.keys(parents).forEach((email) => {
    const parent = find(email);
    if (emails[parent]) {
      emails[parent].push(email);
    } else {
      emails[parent] = [email];
    }
  });

  return Object.entries(emails).map(([email, x]) => [emailOwner[email], ...x.sort()]);
};
