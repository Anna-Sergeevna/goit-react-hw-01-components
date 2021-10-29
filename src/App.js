import Section from 'components/Section/Section';

import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import statisticalData from 'components/Statistics/statistical-data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

// import transactions from 'components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div className="conainer">
      <Section>
        <Profile
          key={user.tag}
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      {/* <Section>
        <TransactionHistory items={transactions} />
      </Section> */}
    </div>
  );
}
