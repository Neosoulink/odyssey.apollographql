import React from "react";
import { useQuery, gql } from "@apollo/client";

//  COMPONENTS
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";

export const TRACKS = gql`
	query getTracks {
		tracksForHome {
			id
			title
			thumbnail
			length
			modulesCount
			author {
				photo
				name
				id
			}
		}
	}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
	const { loading, error, data } = useQuery(TRACKS);
	return (
		<Layout grid>
			<QueryResult
				{...{
					loading,
					error,
					data,
				}}
			>
				{data?.tracksForHome?.map((track) => (
					<TrackCard key={track.id} track={track} />
				))}
			</QueryResult>
		</Layout>
	);
};

export default Tracks;
