package com.test.react.restful.controller;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class CompareObjUtils {
    private static final String GET = "get";
    private static final String SET = "set";

    public static void main(String... args) throws NoSuchFieldException, IllegalArgumentException, InvocationTargetException, IllegalAccessException {
        Field[] fields = Emp.class.getDeclaredFields();

        for (Field f : fields) {
            System.out.println(f.getName() + "---" + f.getType());
        }


        Emp e1 = new Emp(1, "DEL", 25, 25.0);
        Emp e2 = new Emp(1, "Punjab", 25, 25.0);

       /* Method[] methods = Emp.class.getDeclaredMethods();

        for (Method m: methods){
           if( m.getName().startsWith("get")) {
               System.out.println(m.getName());
               System.out.println(m.invoke(e1).equals(m.invoke(e2)));
           }
        }*/
        Optional<List<Method>> methodList = findMethods(Optional.of(e1), GET);
        //System.out.println(methodList.map(x -> x));
        Optional<List<String>> changedSetter = compare(e1, e2);
        List<String> sList = changedSetter.map(x -> {
            x.stream().forEach(System.out::println);

            return x;
        }).get();

        Emp e3 = new Emp();

        for (String s : sList) {
            try {

                Method getterMethod = e1.getClass().getDeclaredMethod(GET+s.substring(3));
                Method setterMethod = e1.getClass().getDeclaredMethod(s,getterMethod.getReturnType());
                setterMethod.invoke(e3,getterMethod.invoke(e1));
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            }
        }

        System.out.println(e3);

    }

    public static Optional<List<String>> compare(Object o1, Object o2) {
        Optional<List<Method>> getterList = findMethods(Optional.of(o1), GET);

        Optional<List<String>> setterList = getterList.map(x -> x.stream().filter(m -> {
            try {
                return !m.invoke(o1).equals(m.invoke(o2));
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
            return false;
        }).map(mm -> SET + mm.getName().substring(3)).collect(Collectors.toList()));
        return setterList;
        //System.out.println(setterList);
    }

    public static Optional<List<Method>> findMethods(Optional<Object> optionalObj, String type) {
        // Optional<Method[]> methods = optionalObj.map( obj -> obj.getClass().getDeclaredMethods());
        Optional<List<Method>> methodList = optionalObj.map(obj -> {
            Method[] methods = obj.getClass().getDeclaredMethods();
            if (methods != null) {
                return Arrays.stream(methods).filter(m -> m.getName().startsWith(type)).collect(Collectors.toList());
            } else {
                return null;
            }
        });
        return methodList;
    }

    public static void compare(Object o1, Object o2, Class clazz) {
        Method[] methods = o1.getClass().getDeclaredMethods();
        Arrays.stream(methods).forEach(m -> {

            if (m.getName().startsWith("get")) {
                System.out.println(m.getName());
                try {
                    System.out.println(m.invoke(o1).equals(m.invoke(o2)));
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                }
            }
        });

    }
}
