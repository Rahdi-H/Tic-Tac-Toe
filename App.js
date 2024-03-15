import { Alert, Dimensions, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const windowWidth = Dimensions.get('window').width;

const App = () => {
  const [activePlayer, setActivePlayer] = useState('X')
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])
  const markPosition = (position) => {
    const temp = [...markers]
    if (temp[position] == null){
      temp[position] = activePlayer
      setMarkers(temp)
      if (activePlayer == 'X') {
        setActivePlayer('0')
      } else {
        setActivePlayer('X')
      }
    }
  }
  const reload = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a]
      }
    }
    return null
  }
  useEffect(()=> {
    const winner = calculateWinner(markers)
    if (winner == 'X'){
      alert('Player X Won')
    } else if  (winner == '0') {
      alert('Player 0 Won')
    }
  }, [markPosition])
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar />
      <View style={[styles.playerInfo, {backgroundColor: activePlayer === 'X'? '#5987EC': '#59EC91'}]}>
        <Text style={styles.playerInfoTxt}>Player {activePlayer}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable style={[styles.cell, styles.cell1]} onPress={()=> markPosition(0)}>
          {markers[0] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[0] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell2]} onPress={()=> markPosition(1)}>
          {markers[1] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[1] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell3]} onPress={()=> markPosition(2)}>
          {markers[2] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[2] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell4]} onPress={()=> markPosition(3)}>
          {markers[3] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[3] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell5]} onPress={()=> markPosition(4)}>
          {markers[4] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[4] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell6]} onPress={()=> markPosition(5)}>
          {markers[5] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[5] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell7]} onPress={()=> markPosition(6)}>
          {markers[6] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[6] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell8]} onPress={()=> markPosition(7)}>
          {markers[7] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[7] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
        <Pressable style={[styles.cell, styles.cell9]} onPress={()=> markPosition(8)}>
          {markers[8] == 'X' && <Image source={require('./assets/cross.png')} style={styles.icon} />}
          {markers[8] == '0' && <Image source={require('./assets/circle.png')} style={styles.icon} />}
        </Pressable>
      </View>
      <Pressable style={styles.replayBtn} onPress={reload}>
        <Image source={require('./assets/replay.png')} style={styles.replayIcon}/>
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  playerInfoTxt: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1.2,
    color: 'white'
  },
  mainContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  cell: {
    width: windowWidth/3.2,
    height: windowWidth/3.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell1:{
    borderBottomWidth: 5,
    borderBottomColor: 'black',
    borderRightColor: 'black',
    borderRightWidth: 5,
  },
  cell2: {
    borderLeftColor: 'black',
    borderBottomColor: 'black',
    borderRightColor: 'black',
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 5
  },
  cell3: {
    borderLeftColor: 'black',
    borderBottomColor: 'black',
    borderLeftWidth: 5,
    borderBottomWidth: 5
  },
  cell4: {
    borderTopColor: 'black',
    borderRightColor: 'black',
    borderBottomColor: 'black',
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5
  },
  cell5:{
    borderColor: 'black',
    borderWidth: 5
  },
  cell6: {
    borderLeftColor: 'black',
    borderTopColor: 'black',
    borderBottomColor: 'black',
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderBottomWidth: 5
  },
  cell7: {
    borderTopColor: 'black',
    borderRightColor: 'black',
    borderTopWidth: 5,
    borderRightWidth: 5
  },
  cell8: {
    borderTopColor: 'black',
    borderRightColor: 'black',
    borderLeftColor: 'black',
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderLeftWidth: 5
  },
  cell9: {
    borderLeftColor: 'black',
    borderTopColor: 'black',
    borderTopWidth: 5,
    borderLeftWidth: 5
  },
  replayBtn:{
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: '#E8E8E8',
    padding: 5,
    borderRadius: 50
  },
  replayIcon: {
    height: 60,
    width: 60
  }
})