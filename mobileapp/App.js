import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  
	state={
		num: 0,
	}
	
	inp1=0;
	inp2=0;
	tax1=0.12;

	handleAdd=()=>{
		this.setState({
			num:this.inp1+this.inp2
		})
	}
	
	handleSub=()=>{
		this.setState({
			num:this.inp1-this.inp2
		})
	}
	
	handleMul=()=>{
		this.setState({
			num:this.inp1*this.inp2
		})
	}
	
	handleDiv=()=>{
		this.setState({
			num:this.inp1/this.inp2
		})
	}
	
	//12% Tax on final number
	handleTax=()=>{
		var newNum = this.state.num + this.state.num * 0.12;
		
		this.setState({
			num: newNum
		})
	}
	
	handleNum1=(text)=>{
		this.inp1 = parseInt(text);
	}
	
	handleNum2=(text)=>{
		this.inp2 = parseInt(text);
	}
	
	render() {
    return (
      <View style={styles.container}>
        <Text>Hello Welcome to My App</Text>
				
				<View style={styles.inpBox}>
					<TextInput 
						style={[styles.inps , {marginRight:10}]}
						placeholder="1st Number"
						keyboardType="phone-pad"
						onChangeText={this.handleNum1}
						/>

					<TextInput 
						style={styles.inps}
						placeholder="2nd Number"
						keyboardType="phone-pad"
						onChangeText={this.handleNum2}
						/>
				</View>
				
				<View style={styles.butBox}>
					<View style={styles.butView}>
						<Button
							onPress={this.handleAdd}
							title="+"
							/>
					</View>
					<View style={styles.butView}>
						<Button
							onPress={this.handleSub}
							title="-"
							/>
					</View>
					<View style={styles.butView}>
						<Button
							onPress={this.handleMul}
							title="*"
							/>
					</View>
					<View style={styles.butView}>
						<Button
							onPress={this.handleDiv}
							title="/"
							/>
					</View>
					<View style={styles.butView}>
						<Button
							onPress={this.handleTax}
							title="Tax"
							color="red"
							/>
					</View>
				</View>
				
				<Text style={styles.result}>{this.state.num}</Text>
				
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	butBox: {
		flexDirection: "row"
	},
	butView: {
		margin: 5
	},
	inpBox: {
		flexDirection: "row"
	},
	inps: {
		width: "20%",
		height: 50,
		textAlign: "center"
	},
	result: {
		marginTop: 10,
		fontWeight: "bold",
		fontSize: 20
	}
});
