import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";

export const GET_TRACK = gql`
	query getTrack($trackId: ID!) {
		track(id: $trackId) {
			id
			title
			author {
				id
				name
				photo
			}
			thumbnail
			length
			modulesCount
			numberOfViews
			modules {
				id
				title
				length
			}
			description
		}
	}
`;

const Track = ({ trackId }) => {
	return <Layout></Layout>;
};

export default Track;
