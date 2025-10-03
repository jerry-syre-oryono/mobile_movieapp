import { Tabs } from 'expo-router'
import { ImageBackground } from 'react-native'
import {images} from '@/constants/images'
import { icons } from '@/constants/icons'
import { Image, Text } from 'react-native'




const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            headerShown: false,
            title: "Home",
            tabBarIcon:({focused}) => (
                <ImageBackground 
                    source={images.highlight}
                    className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'
                >
                   <Image source={icons.home} tintColor='#151312' className='size-5'/>
                   <Text className="text-secondary text-base font-semibold ml-2">Home</Text>
                </ImageBackground>
            )
         }}
        />
        
        <Tabs.Screen
        name="search"
        options={{
            headerShown: false,
            title: "Search",
            tabBarIcon:({focused}) => (
                <Image source={icons.search} className='size-5'/>
            )
        }}
        />

        <Tabs.Screen
        name="saved"
        options={{
            headerShown: false,
            title: "Saved",
            tabBarIcon:({focused}) => (
                <Image source={icons.save} className='size-5'/>
            )
        }}
        />

        <Tabs.Screen
        name="profile"
        options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon:({focused}) => (
                <Image source={icons.person} className='size-5'/>
            )
        }}
        />
        
        
    </Tabs>
  )
}

export default _layout