import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";
import { ResultsDropdown } from "../components";

/*NOTE: Event.preventDefault = we have to do this every time that you have an input or buttons or things like
that, because the usual browser behavior is whenever you click submit or something similar to reload
the page, we're working with react , we want everything to be reactive instantaneous and we want to
prevent that.*/

const ChannelSearch = ({ setToggleContainer }) => {
  const { client, setActiveChannel } = useChatContext();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [teamChannels, setTeamChannels] = useState([]);
  const [directChannels, setDirectChannels] = useState([]);

  useEffect(() => {
    if (!query) {
      setTeamChannels([]);
      setDirectChannels([]);
    }
  }, [query]);

  const getChannels = async (text) => {
    try {
      const channelResponse = client.queryChannels({
        type: "team",
        name: { $autocomplete: text },
        members: { $in: [client.userID] },
      });
      const userResponse = client.queryUsers({
        id: { $ne: client.userID },
        name: { $autocomplete: text },
      });

      const [channels, { users }] = await Promise.all([
        channelResponse,
        userResponse,
      ]);
      if (channels.length) setTeamChannels(channels);
      if (users.length) setDirectChannels(users);
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = async (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    await getChannels(event.target.value);
    setLoading(false);
  };

  const setChannel = (channel) => {
    setQuery("");
    setActiveChannel(channel);
  };

  return (
    <>
      <div className="channel-search__container">
        <div className="channel-search__input__wrapper">
          <div className="channel-search__input__icon">
            <SearchIcon />
          </div>
          <input
            className="channel-search__input__text"
            placeholder="Search"
            type="text"
            value={query}
            onChange={onSearch}
          />
        </div>
        {query && (
          <ResultsDropdown
            teamChannels={teamChannels}
            directChannels={directChannels}
            loading={loading}
            setChannel={setChannel}
            setQuery={setQuery}
            setToggleContainer={setToggleContainer}
          />
        )}
      </div>
    </>
  );
};

export default ChannelSearch;
