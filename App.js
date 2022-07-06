import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';

// const isAndroid = Platform.OS === 'android';
// console.log(StatusBar.currentHeight);
export default function App() {
	const [searchQuery, setSearchQuery] = React.useState('');

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Searchbar
						placeholder='Search'
						// onChangeText={onChangeSearch}
						// value={searchQuery}
					/>
				</View>
				<View style={styles.results}>
					<Text style={{ color: 'white' }}>Results</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		backgroundColor: 'blue',
		padding: 16,
	},
	results: {
		flex: 1,
		backgroundColor: 'green',
		padding: 16,
	},
});
